
import { Calibration } from '../models/calibration';
import { Constants } from '../models/constants';
import { SimpleRegression } from '../models/simple-regression';

export class CalibrationService {

    constructor() { }

    /**
     * Calibrate sample.
     *
     * @param calibration - calibration to be compute
     *
     * @return calibrated sample
     */
    public calibrate(calibration: Calibration): Calibration {
        const newSimpleRegression = {
            hasIntercept: true,
            size: 0,
            sumX: 0,
            sumXX: 0,
            sumXY: 0,
            sumY: 0,
            sumYY: 0,
            xbar: 0,
            ybar: 0
        };

        const absorbances = calibration.absorbances;
        const concentrations = calibration.concentrations;

        for (let i = 0; i < absorbances.length; i++) {
            const y = absorbances[i];
            const x = concentrations[i];

            if (newSimpleRegression.size === 0) {
                newSimpleRegression.xbar = x;
                newSimpleRegression.ybar = y;
            } else if (newSimpleRegression.hasIntercept) {
                const fact1 = 1.0 + newSimpleRegression.size;
                const fact2 = newSimpleRegression.size / fact1;
                const dx = x - newSimpleRegression.xbar;
                const dy = y - newSimpleRegression.ybar;
                newSimpleRegression.sumXX += dx * dx * fact2;
                newSimpleRegression.sumYY += dy * dy * fact2;
                newSimpleRegression.sumXY += dx * dy * fact2;
                newSimpleRegression.xbar += dx / fact1;
                newSimpleRegression.ybar += dy / fact1;
            }

            if (!newSimpleRegression.hasIntercept) {
                newSimpleRegression.sumXX += x * x;
                newSimpleRegression.sumYY += y * y;
                newSimpleRegression.sumXY += x * y;
            }

            newSimpleRegression.sumX += x;
            newSimpleRegression.sumY += y;
            newSimpleRegression.size++;
        }

        calibration.simpleRegression = newSimpleRegression;

        return calibration;
    }

    /**
     * Return the R correlation between the two data sets.
     *
     * @param simpleRegression - simple regression to compute Pearson coefficient
     *
     * @return Pearson coefficient
     */
    public getPearson(simpleRegression: SimpleRegression): number {
        const ssto = this.getTotalSumSquares(simpleRegression);
        return (ssto - this.getSumSquaredErrors(simpleRegression)) / ssto;
    }

    /**
     * Returns the sum of squared errors (SSE) associated with the regression
     * model.
     *
     * The sum is computed using the computational formula
     * SSE = SYY - (SXY * SXY / SXX)
     * where SYY is the sum of the squared deviations of the y values about
     * their mean, SXX is similarly defined and SXY is the sum of the products
     * of x and y mean deviations.
     *
     * The return value is constrained to be non-negative, if due to
     * rounding errors the computational formula returns a negative result,
     * 0 is returned.
     *
     * @param simpleRegression - simple regression to compute Pearson coefficient
     *
     * @return sum of squared errors associated with the regression model
     */
    public getSumSquaredErrors(simpleRegression: SimpleRegression): number {
        return Math.max(0, simpleRegression.sumYY - simpleRegression.sumXY * simpleRegression.sumXY / simpleRegression.sumXX);
    }

    /**
     * Returns the sum of squared deviations of the y values about their mean.
     *
     * This is defined as SSTO.
     * If size < 2, this returns NaN.
     *
     * @param simpleRegression - simple regression to compute Pearson coefficient
     *
     * @return sum of squared deviations of y values
     */
    public getTotalSumSquares(simpleRegression: SimpleRegression): number {
        if (simpleRegression.size < 2) {
            return NaN;
        }

        return simpleRegression.sumYY;
    }
}