/**
 * Estimates an ordinary least squares regression model
 * with one independent variable.
 */
 export class SimpleRegression {
    // Include an intercept or not
    hasIntercept: boolean;
    // Sum of x values
    sumX: number;
    // Total variation in x (sum of squared deviations from xbar)
    sumXX: number;
    // Sum of products
    sumXY: number;
    // Sum of y values
    sumY: number;
    // Total variation in y (sum of squared deviations from ybar)
    sumYY: number;
    // Number of observations
    size: number;
    // Mean of accumulated x values, used in updating formulas
    xbar: number;
    // Mean of accumulated y values, used in updating formulas
    ybar: number;
}