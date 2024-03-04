---
title: Example report
---

# A brief history of space exploration

This report is a brief overview of the history and current state of rocket launches and space exploration.

## Background

The history of rocket launches dates back to ancient China, where gunpowder-filled tubes were used as primitive forms of propulsion.

Fast-forward to the 20th century during the Cold War era, the United States and the Soviet Union embarked on a space race, a competition to innovate and explore beyond Earth.

This led to the launch of the first artificial satellite, Sputnik 1, and the crewed moon landing by Apollo 11. As technology advanced, rocket launches became synonymous with space exploration and satellite deployment.

## The Space Shuttle era

```js
import {timeline} from "./components/timeline.js";
import Highcharts from 'npm:highcharts';
import streamgraph from 'npm:highcharts/modules/streamgraph.js'
import series-label from 'npm:highcharts/modules/streamgraph.js'

<script src="https://code.highcharts.com/modules/series-label.js"></script>
<script src="https://code.highcharts.com/modules/annotations.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>

// Alternatively, this is how to load Highcharts Stock. The Maps and Gantt
// packages are similar.
// import Highcharts from 'highcharts/highstock';

```

```js
const events = FileAttachment("./data/events.json").json();
const penguins = FileAttachment('./data/penguins.csv');
console.log(penguins)
```

```js
timeline(events, {height: 300})
```

### Sputnik 1 (1957)

This was the first artificial satellite. Launched by the Soviet Union, it marked the beginning of the space age.

### Apollo 11 (1969)

The historic Apollo 11 mission, led by NASA, marked the first successful human landing on the Moon. Astronauts Neil Armstrong and Buzz Aldrin became the first humans to set foot on the lunar surface.

### Viking 1 and 2 (1975)

NASA’s Viking program successfully launched two spacecraft, Viking 1 and Viking 2, to Mars. These missions were the first to successfully land and operate on the Martian surface, conducting experiments to search for signs of life.

### Space Shuttle Columbia (1981)

The first orbital space shuttle mission, STS-1, launched the Space Shuttle Columbia on April 12, 1981. The shuttle program revolutionized space travel, providing a reusable spacecraft for a variety of missions.

### Hubble Space Telescope (1990)

The Hubble Space Telescope has provided unparalleled images and data, revolutionizing our understanding of the universe and contributing to countless astronomical discoveries.

### International Space Station (ISS) construction (1998—2011)

The ISS, a collaborative effort involving multiple space agencies, began construction with the launch of its first module, Zarya, in 1998. Over the following years, various modules were added, making the ISS a symbol of international cooperation in space exploration.

## Commercial spaceflight

After the Space Shuttle program, a new era emerged with a shift towards commercial spaceflight.

Private companies like Blue Origin, founded by Jeff Bezos in 2000, and SpaceX, founded by Elon Musk in 2002, entered the scene. These companies focused on developing reusable rocket technologies, significantly reducing launch costs.

SpaceX, in particular, achieved milestones like the first privately developed spacecraft to reach orbit (Dragon in 2010) and the first privately funded spacecraft to dock with the ISS (Dragon in 2012).

## Recent launch activity

The proliferation of commercial space companies has driven a surge in global launch activity within the last few years.

SpaceX’s Falcon 9 and Falcon Heavy, along with other vehicles from companies like Rocket Lab, have become workhorses for deploying satellites, conducting scientific missions, and ferrying crew to the ISS.

The advent of small satellite constellations, such as Starlink by SpaceX, has further fueled this increase in launches. The push for lunar exploration has added momentum to launch activities, with initiatives like NASA’s Artemis program and plans for crewed missions to the Moon and Mars.

## Looking forward

As technology continues to advance and global interest in space exploration grows, the future promises even more exciting developments in the realm of rocket launches and space travel.

Exploration will not only be limited to the Moon or Mars, but extend to other parts of our solar system such as Jupiter and Saturn’s moons, and beyond.


# test highchart

<div id="container"></div>

```js
const colors = Highcharts.getOptions().colors;
console.log(colors);
Highcharts.chart('container', {

    chart: {
        type: 'streamgraph',
        marginBottom: 30,
        zoomType: 'x'
    },

    // Make sure connected countries have similar colors
    colors: [
        colors[0],
        colors[1],
        colors[2],
        colors[3],
        colors[4],
        // East Germany, West Germany and Germany
        Highcharts.color(colors[5]).brighten(0.2).get(),
        Highcharts.color(colors[5]).brighten(0.1).get(),

        colors[5],
        colors[6],
        colors[7],
        colors[8],
        colors[9],
        colors[0],
        colors[1],
        colors[3],
        // Soviet Union, Russia
        Highcharts.color(colors[2]).brighten(-0.1).get(),
        Highcharts.color(colors[2]).brighten(-0.2).get(),
        Highcharts.color(colors[2]).brighten(-0.3).get()
    ],

    title: {
        floating: true,
        align: 'left',
        text: 'Winter Olympic Medal Wins'
    },
    subtitle: {
        floating: true,
        align: 'left',
        y: 30,
        text: 'Source: <a href="https://www.sports-reference.com/olympics/winter/1924/">sports-reference.com</a>'
    },

    xAxis: {
        maxPadding: 0,
        type: 'category',
        crosshair: true,
        categories: [
            '',
            '1924 Chamonix',
            '1928 St. Moritz',
            '1932 Lake Placid',
            '1936 Garmisch-Partenkirchen',
            '1940 <i>Cancelled (Sapporo)</i>',
            '1944 <i>Cancelled (Cortina d\'Ampezzo)</i>',
            '1948 St. Moritz',
            '1952 Oslo',
            '1956 Cortina d\'Ampezzo',
            '1960 Squaw Valley',
            '1964 Innsbruck',
            '1968 Grenoble',
            '1972 Sapporo',
            '1976 Innsbruck',
            '1980 Lake Placid',
            '1984 Sarajevo',
            '1988 Calgary',
            '1992 Albertville',
            '1994 Lillehammer',
            '1998 Nagano',
            '2002 Salt Lake City',
            '2006 Turin',
            '2010 Vancouver',
            '2014 Sochi'
        ],
        labels: {
            align: 'left',
            reserveSpace: false,
            rotation: 270
        },
        lineWidth: 0,
        margin: 20,
        tickWidth: 0
    },

    yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
    },

    legend: {
        enabled: false
    },

    annotations: [{
        labels: [{
            point: {
                x: 5.5,
                xAxis: 0,
                y: 30,
                yAxis: 0
            },
            text: 'Cancelled<br>during<br>World War II'
        }, {
            point: {
                x: 18,
                xAxis: 0,
                y: 90,
                yAxis: 0
            },
            text: 'Soviet Union fell,<br>Germany united'
        }],
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'silver'
        }
    }],

    plotOptions: {
        series: {
            label: {
                minFontSize: 5,
                maxFontSize: 15,
                style: {
                    color: 'rgba(255,255,255,0.75)'
                }
            },
            accessibility: {
                exposeAsGroupOnly: true
            }
        }
    },

    // Data parsed with olympic-medals.node.js
    series: [{
        name: 'Finland',
        data: [
            0, 11, 4, 3, 6, 0, 0, 6, 9, 7, 8, 10, 5, 5, 7, 9, 13, 7,
            7, 6, 12, 7, 9, 5, 5
        ]
    }, {
        name: 'Austria',
        data: [
            0, 3, 4, 2, 4, 0, 0, 8, 8, 11, 6, 12, 11, 5, 6, 7, 1, 10,
            21, 9, 17, 17, 23, 16, 17
        ]
    }, {
        name: 'Sweden',
        data: [
            0, 2, 5, 3, 7, 0, 0, 10, 4, 10, 7, 7, 8, 4, 2, 4, 8, 6, 4,
            3, 3, 7, 14, 11, 15
        ]
    }, {
        name: 'Norway',
        data: [
            0, 17, 15, 10, 15, 0, 0, 10, 16, 4, 6, 15, 14, 12, 7, 10,
            9, 5, 20, 26, 25, 25, 19, 23, 26
        ]
    }, {
        name: 'U.S.',
        data: [
            0, 4, 6, 12, 4, 0, 0, 9, 11, 7, 10, 7, 7, 8, 10, 12, 8, 6,
            11, 13, 13, 34, 25, 37, 28
        ]
    }, {
        name: 'East Germany',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 14, 19, 23, 24, 25,
            0, 0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'West Germany',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 5, 10, 5, 4, 8, 0,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'Germany',
        data: [
            0, 0, 1, 2, 6, 0, 0, 0, 7, 2, 8, 9, 0, 0, 0, 0, 0, 0, 26,
            24, 29, 36, 29, 30, 19
        ]
    }, {
        name: 'Netherlands',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 2, 9, 9, 6, 4, 0, 7, 4,
            4, 11, 8, 9, 8, 24
        ]
    }, {
        name: 'Italy',
        data: [
            0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 1, 4, 4, 5, 4, 2, 2, 5, 14,
            20, 10, 13, 11, 5, 8
        ]
    }, {
        name: 'Canada',
        data: [
            0, 1, 1, 7, 1, 0, 0, 3, 2, 3, 4, 3, 3, 1, 3, 2, 4, 5, 7,
            13, 15, 17, 24, 26, 25
        ]
    }, {
        name: 'Switzerland',
        data: [
            0, 3, 1, 1, 3, 0, 0, 10, 2, 6, 2, 0, 6, 10, 5, 5, 5, 15,
            3, 9, 7, 11, 14, 9, 11
        ]
    }, {
        name: 'Great Britain',
        data: [
            0, 4, 1, 0, 3, 0, 0, 2, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0,
            2, 1, 2, 1, 1, 4
        ]
    }, {
        name: 'France',
        data: [
            0, 3, 1, 1, 1, 0, 0, 5, 1, 0, 3, 7, 9, 3, 1, 1, 3, 2, 9,
            5, 8, 11, 9, 11, 15
        ]
    }, {
        name: 'Hungary',
        data: [
            0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'Unified Team',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'Soviet Union',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 21, 25, 13, 16, 27, 22, 25,
            29, 0, 0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'Russia',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            23, 18, 13, 22, 15, 33
        ]
    }, {
        name: 'Japan',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 1, 1, 1, 7,
            5, 10, 2, 1, 5, 8
        ]
    }, {
        name: 'Czechoslovakia',
        data: [
            0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 4, 3, 1, 1, 6, 3, 3,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'Poland',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0,
            0, 0, 2, 2, 6, 6
        ]
    }, {
        name: 'Spain',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'China',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
            3, 8, 8, 11, 11, 9
        ]
    }, {
        name: 'South Korea',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
            6, 6, 4, 11, 14, 8
        ]
    }, {
        name: 'Czech Republic',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 3, 3, 4, 6, 8
        ]
    }, {
        name: 'Belarus',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            2, 2, 1, 1, 3, 6
        ]
    }, {
        name: 'Kazakhstan',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            3, 2, 0, 0, 1, 1
        ]
    }, {
        name: 'Bulgaria',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
            0, 1, 3, 1, 0, 0
        ]
    }, {
        name: 'Denmark',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1, 0, 0, 0, 0
        ]
    }, {
        name: 'Ukraine',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            2, 1, 0, 2, 0, 2
        ]
    }, {
        name: 'Australia',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 2, 2, 3, 3
        ]
    }, {
        name: 'Belgium',
        data: [
            0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1, 0, 0, 0, 0
        ]
    }, {
        name: 'Romania',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'Liechtenstein',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 0,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'Yugoslavia',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'Luxembourg',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'New Zealand',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'North Korea',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 0, 0, 0
        ]
    }, {
        name: 'Slovakia',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 3, 1
        ]
    }, {
        name: 'Croatia',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 4, 3, 3, 1
        ]
    }, {
        name: 'Slovenia',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            3, 0, 1, 0, 3, 8
        ]
    }, {
        name: 'Latvia',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 2, 4
        ]
    }, {
        name: 'Estonia',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 3, 3, 1, 0
        ]
    }, {
        name: 'Uzbekistan',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0
        ]
    }],

    exporting: {
        sourceWidth: 800,
        sourceHeight: 600
    }

});

```