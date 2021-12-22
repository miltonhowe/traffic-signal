#!/usr/bin/env node

import { Board, Led } from 'johnny-five';


const board = new Board();

board.on('ready', () => {
    const led = new Led(14);
    led.blink(500);
});
