import * as Highcharts from './node_modules/highcharts';
// Alternatively, this is how to load Highcharts Stock. The Maps and Gantt
// packages are similar.
// import Highcharts from 'highcharts/highstock';

// Load the exporting module.
import * as Exporting from './node_modules/highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);