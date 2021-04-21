import { SimpleRegression } from './simple-regression';

export class Calibration {
    absorbances: number[];
    concentrations: number[];
    date: string;
    fileKeys: string[];
    simpleRegression: SimpleRegression;
    stdColumn: string;
    wavelength: number;
}