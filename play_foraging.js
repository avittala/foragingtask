/********************** 
 * Play_Foraging *
 **********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'play_foraging';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(experiment_settingsRoutineBegin());
flowScheduler.add(experiment_settingsRoutineEachFrame());
flowScheduler.add(experiment_settingsRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);











flowScheduler.add(totalRoutineBegin());
flowScheduler.add(totalRoutineEachFrame());
flowScheduler.add(totalRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'tree.png', 'path': 'images/tree.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': '0.png', 'path': 'images/0.png'},
    {'name': '1.png', 'path': 'images/1.png'},
    {'name': '2.png', 'path': 'images/2.png'},
    {'name': '3.png', 'path': 'images/3.png'},
    {'name': '4.png', 'path': 'images/4.png'},
    {'name': '5.png', 'path': 'images/5.png'},
    {'name': '6.png', 'path': 'images/6.png'},
    {'name': '7.png', 'path': 'images/7.png'},
    {'name': '8.png', 'path': 'images/8.png'},
    {'name': '9.png', 'path': 'images/9.png'},
    {'name': '10.png', 'path': 'images/10.png'},
    {'name': '11.png', 'path': 'images/11.png'},
    {'name': '12.png', 'path': 'images/12.png'},
    {'name': '13.png', 'path': 'images/13.png'},
    {'name': '14.png', 'path': 'images/14.png'},
    {'name': '15.png', 'path': 'images/15.png'},
    {'name': '16.png', 'path': 'images/16.png'},
    ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionsClock;
var text_8;
var key_resp_2;
var mouse_2;
var experiment_settingsClock;
var block_settingsClock;
var choiceClock;
var image;
var polygon;
var key_resp;
var text_5;
var text_6;
var mouse;
var wait_rtClock;
var image_6;
var harvestClock;
var text;
var image_2;
var show_applesClock;
var image_4;
var image_7;
var too_slowClock;
var text_3;
var image_3;
var travelClock;
var text_2;
var image_5;
var next_blockClock;
var text_9;
var key_resp_3;
var mouse_3;
var totalClock;
var text_4;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'You are foraging in an orchard for apples\nTrees will run out of apples as you harvest them\nPress down to shake the tree and get apples\nPress right to move to the next tree\nTotal score is top left\nTime left in orchard is top right\nPress any key to begin!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "experiment_settings"
  experiment_settingsClock = new util.Clock();
  // Initialize components for Routine "block_settings"
  block_settingsClock = new util.Clock();
  // Initialize components for Routine "choice"
  choiceClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'tree.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, 
    pos: [0, (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "wait_rt"
  wait_rtClock = new util.Clock();
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'tree.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "harvest"
  harvestClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'tree.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "show_apples"
  show_applesClock = new util.Clock();
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'tree.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : '10.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.3)], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "too_slow"
  too_slowClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'tree.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "travel"
  travelClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'tree.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "next_block"
  next_blockClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Moving to a new orchard...\nTravel time between trees will change\nPress any key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "total"
  totalClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instructionsMaxDurationReached;
var _key_resp_2_allKeys;
var gotValidClick;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_8);
    instructionsComponents.push(key_resp_2);
    instructionsComponents.push(mouse_2);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: [], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var experiment_settingsMaxDurationReached;
var experiment_settingsMaxDuration;
var experiment_settingsComponents;
function experiment_settingsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'experiment_settings' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    experiment_settingsClock.reset();
    routineTimer.reset();
    experiment_settingsMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('experiment_settings.started', globalClock.getTime());
    experiment_settingsMaxDuration = null
    // keep track of which components have finished
    experiment_settingsComponents = [];
    
    for (const thisComponent of experiment_settingsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function experiment_settingsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'experiment_settings' ---
    // get current time
    t = experiment_settingsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of experiment_settingsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var time_per_block;
var block_travel_times;
var num_blocks;
var total_apples;
var average_rps;
var apple_starts;
var depletion_rates;
function experiment_settingsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'experiment_settings' ---
    for (const thisComponent of experiment_settingsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('experiment_settings.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    time_per_block = 200;
    block_travel_times = [3, 10, 3, 10];
    num_blocks = block_travel_times.length;
    total_apples = 0;
    average_rps = [];
    apple_starts = [11, 11, 10, 10, 9, 10, 7, 10, 9, 11, 11, 11, 9, 11, 11, 10, 11, 9, 11, 9, 11, 10, 12, 9, 10, 10, 9, 10, 10, 10, 9, 8, 8, 9, 11, 10, 8, 11, 8, 8, 8, 11, 8, 10, 8, 11, 10, 10, 8, 9, 10, 9, 11, 9, 10, 9, 11, 8, 10, 10, 9, 10, 9, 8, 10, 9, 11, 11, 10, 8, 9, 12, 12, 10, 10, 10, 9, 8, 8, 9, 9, 10, 8, 8, 9, 8, 10, 10, 10, 11, 10, 9, 9, 9, 10, 12, 12, 8, 9, 11, 9, 9, 8, 10, 11, 10, 11, 11, 9, 10, 10, 10, 10, 8, 10, 10, 9, 10, 8, 9, 10, 9, 9, 9, 10, 10, 10, 9, 10, 10, 11, 9, 7, 9, 9, 9, 8, 9, 8, 10, 10, 11, 11, 9, 9, 9, 11, 7, 9, 10, 10, 9, 8, 9, 9, 11, 9, 8, 10, 11, 8, 10, 7, 10, 9, 12, 9, 8, 10, 11, 10, 9, 10, 9, 9, 10, 9, 10, 10, 8, 11, 8, 10, 9, 10, 8, 11, 9, 9, 9, 10, 9, 10, 10, 9, 11, 9, 10, 10, 10, 10, 10, 10, 8, 11, 11, 9, 9, 10, 10, 10, 10, 9, 12, 10, 9, 9, 11, 9, 10, 10, 8, 7, 8, 8, 8, 10, 10, 12, 10, 9, 11, 10, 9, 10, 9, 9, 10, 10, 8, 10, 9, 9, 11, 10, 12, 8, 11, 9, 8, 10, 8, 9, 7, 9, 9, 10, 10, 8, 9, 10, 9, 10, 9, 11, 8, 10, 10, 10, 10, 10, 10, 11, 9, 10, 10, 11, 10, 8, 10, 10, 11, 8, 9, 11, 9, 11, 9, 9, 8, 9, 8, 10, 11, 10, 11, 8, 12, 9, 10, 10, 8, 9, 9, 11, 10, 10, 9, 9, 9, 8, 9, 10, 10, 10, 9, 9, 9, 9, 8, 10, 9, 9, 9, 9, 11, 11, 8, 10, 8, 11, 10, 10, 7, 10, 11, 9, 8, 11, 9, 9, 10, 9, 8, 10, 10, 9, 8, 10, 7, 8, 8, 8, 10, 10, 11, 10, 7, 8, 10, 8, 10, 9, 10, 8, 10, 10, 10, 10, 9, 11, 11, 9, 10, 12, 11, 11, 9, 9, 9, 9, 11, 11, 10, 10, 10, 10, 9, 9, 9, 9, 9, 10, 9, 9, 10, 11, 10, 9, 10, 8, 10, 9, 12, 8, 7, 10, 11, 10, 8, 7, 8, 10, 9, 9, 9, 10, 9, 9, 10, 8, 8, 10, 10, 10, 10, 10, 10, 9, 11, 9, 10, 9, 11, 10, 10, 9, 12, 8, 7, 9, 11, 10, 9, 8, 10, 7, 8, 8, 10, 10, 9, 9, 9, 12, 8, 10, 9, 8, 10, 9, 9, 8, 10, 9, 10, 9, 11, 9, 10, 10, 9, 10, 11, 10, 10, 8, 10, 11, 9, 9, 11, 10, 11, 10, 8, 9, 9, 10, 10, 10, 10, 8, 10, 8, 8, 11, 11, 12, 9, 9, 9, 10, 9, 8, 9, 10, 11, 9, 9, 11, 9, 8, 11, 9, 11, 11, 9, 11, 10, 8, 10, 10, 10, 11, 9, 7, 11, 9, 9, 9, 9, 10, 8, 12, 8, 10, 7, 9, 8, 9, 11, 11, 10, 10, 9, 10, 8, 9, 10, 9, 12, 10, 8, 11, 10, 9, 10, 9, 9, 9, 9, 10, 11, 11, 9, 9, 9, 11, 8, 10, 10, 8, 9, 9, 8, 9, 10, 9, 10, 8, 10, 11, 10, 9, 10, 9, 10, 11, 9, 10, 9, 9, 9, 10, 8, 9, 8, 8, 9, 10, 11, 9, 9, 10, 9, 8, 10, 11, 9, 9, 8, 9, 9, 9, 7, 10, 10, 9, 11, 9, 11, 9, 11, 9, 12, 10, 10, 11, 8, 8, 9, 10, 8, 9, 8, 10, 11, 8, 8, 8, 9, 8, 9, 10, 10, 9, 10, 8, 11, 11, 10, 9, 10, 10, 9, 9, 10, 8, 9, 10, 10, 8, 9, 9, 11, 10, 10, 10, 12, 11, 9, 10, 11, 10, 12, 10, 10, 9, 9, 10, 10, 8, 9, 10, 10, 8, 10, 10, 8, 7, 12, 9, 9, 10, 12, 10, 8, 10, 8, 9, 9, 9, 9, 9, 10, 10, 11, 10, 10, 11, 9, 7, 11, 9, 7, 9, 10, 8, 11, 9, 10, 11, 11, 11, 9, 9, 8, 10, 10, 11, 8, 12, 10, 10, 8, 9, 9, 9, 9, 9, 12, 8, 7, 11, 9, 10, 10, 10, 11, 10, 10, 12, 8, 10, 10, 9, 8, 9, 10, 9, 10, 9, 9, 10, 11, 10, 9, 11, 8, 12, 8, 10, 9, 10, 9, 9, 8, 9, 11, 8, 7, 9, 9, 10, 8, 9, 9, 9, 9, 9, 10, 9, 7, 9, 9, 10, 8, 10, 10, 10, 10, 8, 9, 10, 9, 9, 9, 10, 9, 8, 9, 8, 9, 10, 8, 10, 10, 11, 10, 7, 9, 10, 9, 9, 10, 11, 8, 11, 7, 9, 10, 11, 9, 10, 8, 10, 8, 9, 9, 8, 11, 8, 8, 11, 10, 9, 10, 9, 10, 10, 9, 9, 9, 11, 9, 10, 9, 10, 10, 8, 10, 9, 10, 11, 10, 8, 8, 10, 9, 9, 11, 10, 11, 9, 10, 8, 9, 9, 10, 10, 8, 9, 11, 9, 11, 9, 7, 10, 8, 12, 10, 10, 10, 9, 10, 10, 8, 9, 11, 9, 9, 9, 9, 10, 9, 10, 10, 10, 9, 11, 9, 9, 10, 9, 10, 10, 9, 9, 9, 10, 9, 10, 10, 8, 9, 9, 8, 8, 9, 10, 8, 9, 10, 9, 9, 8, 11, 10, 8, 8, 11, 10, 10, 10, 9, 9, 10, 8, 9, 7, 10, 9, 8, 10, 8, 9, 11, 8, 10, 9, 10, 11, 11, 10, 10, 10, 10, 10, 9, 10, 9, 10, 9, 8, 10, 8, 10, 10, 9, 8, 9, 8, 9, 11, 9, 12, 9, 8, 9, 8, 9, 8, 9, 10, 9, 11, 9, 9, 9];
    depletion_rates = [0.83269144, 0.63367818, 0.87690075, 0.892304, 0.92375691, 0.8996033, 0.85693266, 0.97037066, 0.94434046, 0.89418915, 0.78258531, 0.84773774, 0.84706209, 0.96554793, 0.76917721, 0.9229306, 0.99700166, 0.97708995, 0.99043779, 0.95125476, 0.77756456, 0.946709, 0.92604513, 0.83716712, 0.93761526, 0.85792073, 0.97066033, 0.90541234, 0.7420933, 0.79980562, 0.95951475, 0.959606, 0.83193861, 0.48620803, 0.79140027, 0.80931241, 0.95090395, 0.83716067, 0.89937613, 0.7993394, 0.95939192, 0.87733016, 0.93089847, 0.96644346, 0.91182636, 0.75906882, 0.86882059, 0.96072093, 0.92021058, 0.85258841, 0.88195796, 0.80360484, 0.87779146, 0.85869271, 0.86294649, 0.96690036, 0.8976575, 0.72428632, 0.86337776, 0.99341466, 0.80937289, 0.92159538, 0.98628467, 0.89504377, 0.81464892, 0.82655437, 0.90766845, 0.67283563, 0.93695261, 0.91675509, 0.96018768, 0.95702415, 0.89669873, 0.74753472, 0.80986587, 0.93159444, 0.90099616, 0.71803557, 0.89925561, 0.82661697, 0.96732179, 0.82369117, 0.93487716, 0.98073802, 0.78264631, 0.85050393, 0.99603269, 0.98713933, 0.95307928, 0.88706638, 0.99448199, 0.91000689, 0.87010409, 0.95326662, 0.84198543, 0.88636458, 0.87089675, 0.97435004, 0.99000993, 0.81321794, 0.83569575, 0.97760753, 0.99133249, 0.78919659, 0.9134726, 0.88503794, 0.97751943, 0.91604089, 0.97211852, 0.86558641, 0.77702689, 0.87235444, 0.85974923, 0.92366975, 0.86528417, 0.92893391, 0.83448736, 0.95178626, 0.90675143, 0.89778917, 0.90712769, 0.9760707, 0.79198464, 0.90692235, 0.86839984, 0.84478674, 0.91412024, 0.93871158, 0.82086818, 0.95629633, 0.93993792, 0.92122598, 0.84742265, 0.83230187, 0.83404986, 0.90090882, 0.96560587, 0.93336068, 0.98128977, 0.8890671, 0.87718174, 0.90419905, 0.93669149, 0.96078921, 0.89975198, 0.87301473, 0.92389861, 0.86035128, 0.76448753, 0.82441847, 0.95566248, 0.94543823, 0.8924981, 0.92170318, 0.85290162, 0.90441757, 0.6139637, 0.97637896, 0.79344171, 0.79414822, 0.88886338, 0.90677814, 0.8825491, 0.74412203, 0.75836043, 0.78901078, 0.53932267, 0.97458011, 0.99228792, 0.99006817, 0.91125963, 0.99222026, 0.86588358, 0.88352359, 0.87178831, 0.90819988, 0.92060441, 0.88824617, 0.73359544, 0.88043624, 0.96802738, 0.95411391, 0.77468066, 0.77578315, 0.90916303, 0.9003009, 0.78668297, 0.7950846, 0.94080436, 0.96080053, 0.95485891, 0.72909046, 0.79382058, 0.93882659, 0.95278452, 0.89974211, 0.87829796, 0.92953236, 0.88146724, 0.95242011, 0.86365226, 0.80435766, 0.94155846, 0.97519225, 0.98562651, 0.77727516, 0.98876938, 0.95527752, 0.93200904, 0.88814578, 0.84848613, 0.98593966, 0.67980115, 0.80101306, 0.82664637, 0.85088482, 0.65828067, 0.97432341, 0.92263477, 0.92844804, 0.96255836, 0.97015838, 0.67852039, 0.94536533, 0.88387402, 0.95255738, 0.6964699, 0.75525699, 0.96549429, 0.86953622, 0.98813806, 0.80425165, 0.84798204, 0.91163813, 0.90308208, 0.95077692, 0.69796685, 0.90106932, 0.92029691, 0.95041671, 0.73180717, 0.89826724, 0.97971, 0.82399964, 0.74595877, 0.94022924, 0.98371087, 0.89537293, 0.94552052, 0.80882215, 0.89507388, 0.91015243, 0.80499041, 0.79269327, 0.78398359, 0.8506792, 0.96039643, 0.93043512, 0.95000923, 0.88401881, 0.85046641, 0.81529333, 0.95271884, 0.94714836, 0.92885199, 0.83947751, 0.90998662, 0.97266125, 0.78713719, 0.90606424, 0.90818927, 0.67899408, 0.82018413, 0.97198089, 0.85701307, 0.81201158, 0.71327351, 0.98744656, 0.86476845, 0.9544922, 0.90766656, 0.95339624, 0.90464691, 0.86242986, 0.70858614, 0.84202413, 0.97721744, 0.85008922, 0.82822217, 0.84923433, 0.7491628, 0.8019911, 0.99033833, 0.96514698, 0.97203748, 0.9539116, 0.91647002, 0.79413724, 0.88326754, 0.80200069, 0.77226489, 0.90172781, 0.90764567, 0.87056423, 0.9534886, 0.92746996, 0.96166919, 0.88130096, 0.91832867, 0.78694357, 0.76101382, 0.8754976, 0.96010247, 0.96197642, 0.92707306, 0.84491277, 0.72263814, 0.93020869, 0.69122721, 0.92222625, 0.96133426, 0.73208677, 0.81376212, 0.88063992, 0.71669312, 0.80646672, 0.96643448, 0.71241439, 0.92412854, 0.93532745, 0.88047866, 0.895289, 0.96041569, 0.80220859, 0.99122525, 0.77700158, 0.88058381, 0.85540208, 0.7790631, 0.81045146, 0.96898481, 0.77607022, 0.98009939, 0.90112819, 0.92400186, 0.92239913, 0.84226339, 0.91063014, 0.97127079, 0.93477746, 0.98545611, 0.80859993, 0.57426107, 0.92578633, 0.94064019, 0.92726207, 0.91861008, 0.86506988, 0.98489503, 0.92813743, 0.4970716, 0.89646433, 0.84792336, 0.94591071, 0.89913891, 0.90598926, 0.91737941, 0.84550477, 0.87222542, 0.99110773, 0.76600388, 0.89204547, 0.93911542, 0.82081531, 0.86278322, 0.96202123, 0.9584212, 0.88009184, 0.87436908, 0.91317554, 0.94435532, 0.956423, 0.89723167, 0.9061473, 0.89000708, 0.8239782, 0.74762483, 0.86487721, 0.90756372, 0.96244277, 0.90031596, 0.9641981, 0.94425476, 0.86456362, 0.89143791, 0.86725759, 0.93069553, 0.91461981, 0.89965815, 0.91312857, 0.82336035, 0.92136551, 0.90431861, 0.96784275, 0.8915948, 0.94900965, 0.92439167, 0.88679152, 0.84231686, 0.85977157, 0.93210781, 0.8771301, 0.89269582, 0.94934599, 0.98826044, 0.79568799, 0.9205289, 0.95062913, 0.86390473, 0.71826742, 0.94272302, 0.90692111, 0.96019517, 0.89829809, 0.85354881, 0.92615852, 0.97340824, 0.86226502, 0.79426181, 0.96891349, 0.94678149, 0.90228146, 0.87097862, 0.95462713, 0.88106161, 0.85016442, 0.89277282, 0.86925654, 0.84887767, 0.92486768, 0.99232171, 0.76901187, 0.94854761, 0.90861187, 0.8647293, 0.87481729, 0.86634217, 0.91889602, 0.85429494, 0.98801884, 0.89556446, 0.86416916, 0.96516698, 0.98018546, 0.80127487, 0.72591706, 0.958613, 0.90981233, 0.83566905, 0.94428562, 0.93881462, 0.84188558, 0.98637699, 0.82076117, 0.91536415, 0.7729998, 0.81523433, 0.98934019, 0.64222075, 0.53954429, 0.89494071, 0.93212773, 0.95038745, 0.90649862, 0.84703455, 0.9934142, 0.94449563, 0.80557707, 0.87418873, 0.71701639, 0.81992076, 0.8684263, 0.94092169, 0.95163771, 0.63605461, 0.87059527, 0.96303292, 0.99120998, 0.89209311, 0.82389835, 0.92201466, 0.92070902, 0.868995, 0.87949394, 0.94813616, 0.86269645, 0.84202429, 0.97388403, 0.89824589, 0.94096353, 0.872764, 0.90618819, 0.91305971, 0.920988, 0.96280881, 0.98536312, 0.82625084, 0.86084429, 0.84686166, 0.94213102, 0.87981675, 0.87543497, 0.94982014, 0.8118013, 0.93219847, 0.9909925, 0.84253428, 0.86512345, 0.91524738, 0.93604623, 0.97206333, 0.97693914, 0.98131463, 0.89777024, 0.91955994, 0.91008576, 0.8355646, 0.83943245, 0.77794281, 0.92735612, 0.6996831, 0.86417952, 0.78726825, 0.71272818, 0.89922841, 0.84669195, 0.98753623, 0.87717841, 0.92712427, 0.9361571, 0.92723839, 0.81500272, 0.95268305, 0.93784867, 0.82098316, 0.77871054, 0.86098172, 0.9241809, 0.98221015, 0.79182688, 0.85042053, 0.60904081, 0.97546686, 0.8193096, 0.92690144, 0.94858318, 0.71057357, 0.99423814, 0.6134031, 0.97409824, 0.95827519, 0.84321399, 0.94441319, 0.85736509, 0.95678758, 0.96039509, 0.91079862, 0.951232, 0.89131213, 0.95207726, 0.76188329, 0.86893949, 0.8863379, 0.97717773, 0.98761209, 0.86299817, 0.89805691, 0.97327577, 0.85293306, 0.80860753, 0.78282586, 0.96334214, 0.89677696, 0.9463428, 0.89107217, 0.84582648, 0.97362431, 0.99020604, 0.79144787, 0.92059072, 0.96946715, 0.89602632, 0.9395898, 0.76213089, 0.77446003, 0.88569709, 0.94394672, 0.8687051, 0.86740834, 0.90018872, 0.69995947, 0.83548989, 0.80670976, 0.90886494, 0.96260719, 0.86220792, 0.72629552, 0.96878151, 0.90464378, 0.85668667, 0.98877555, 0.82124252, 0.93206976, 0.79388926, 0.89460367, 0.93159083, 0.85798026, 0.94371944, 0.9187164, 0.96730083, 0.73595949, 0.90407424, 0.92826472, 0.85718158, 0.87788333, 0.83002002, 0.96844489, 0.89228041, 0.76554589, 0.79025385, 0.98662779, 0.86221253, 0.98058158, 0.83373361, 0.98940882, 0.98112147, 0.91654722, 0.96756863, 0.93306357, 0.80256227, 0.81241294, 0.88919307, 0.94283006, 0.78387306, 0.96688122, 0.69462392, 0.8340973, 0.8109071, 0.8399294, 0.91086575, 0.8818314, 0.8538685, 0.93484072, 0.78395946, 0.83522373, 0.78812884, 0.94070232, 0.85536319, 0.92919605, 0.86569099, 0.93855534, 0.84079885, 0.70651562, 0.8737209, 0.93730205, 0.97421867, 0.8985405, 0.84905259, 0.83191758, 0.99917761, 0.8827908, 0.91945225, 0.98091427, 0.97562683, 0.95663729, 0.81929812, 0.8414358, 0.83970906, 0.99218554, 0.93630534, 0.90531189, 0.8750693, 0.85435974, 0.97217372, 0.93991645, 0.94850307, 0.83319655, 0.84205384, 0.92725063, 0.79645422, 0.98342472, 0.90922288, 0.77549195, 0.75590001, 0.84628585, 0.82928293, 0.87263948, 0.81763848, 0.85468066, 0.88042847, 0.78791036, 0.88532165, 0.92597411, 0.9220241, 0.91299401, 0.93283065, 0.75518894, 0.89748901, 0.87002575, 0.87245385, 0.95311041, 0.96587561, 0.8094146, 0.96053693, 0.92973694, 0.868427, 0.81006755, 0.92708016, 0.71298425, 0.94846078, 0.94893566, 0.87728153, 0.91486912, 0.93487662, 0.89805901, 0.86335968, 0.94286896, 0.82020729, 0.96818754, 0.95835341, 0.91597479, 0.73698987, 0.71827719, 0.80878463, 0.99505508, 0.88136779, 0.72380912, 0.85540576, 0.91227806, 0.93107572, 0.97254407, 0.92363225, 0.79877093, 0.86949157, 0.90662, 0.63347022, 0.90902852, 0.80694708, 0.95321026, 0.86515848, 0.7597823, 0.87308141, 0.87951871, 0.76995074, 0.92901656, 0.98725659, 0.73472812, 0.76681508, 0.95900422, 0.84593283, 0.85842409, 0.92966062, 0.97149604, 0.81027627, 0.70131529, 0.89662832, 0.78175559, 0.89062129, 0.68038213, 0.94998172, 0.85151422, 0.98011686, 0.92618592, 0.82477457, 0.87545223, 0.81513882, 0.83840514, 0.97354993, 0.78523625, 0.971414, 0.87640331, 0.82315222, 0.87571164, 0.96867891, 0.88187959, 0.94273186, 0.93813478, 0.82620007, 0.68439006, 0.92195592, 0.76039386, 0.85497489, 0.81404711, 0.98665153, 0.96667396, 0.84536674, 0.96394957, 0.94186726, 0.91843376, 0.87297149, 0.94992311, 0.88642643, 0.98919033, 0.95333951, 0.97979534, 0.92335771, 0.82219448, 0.93069601, 0.87984175, 0.98062594, 0.97042226, 0.89844926, 0.90280129, 0.83489109, 0.8682385, 0.66546958, 0.92695013, 0.8834638, 0.79528426, 0.97273645, 0.95687582, 0.99202678, 0.90047866, 0.93245609, 0.97749838, 0.87010492, 0.71896228, 0.73768932, 0.85043581, 0.72324745, 0.92026421, 0.89540508, 0.84924003, 0.90261125, 0.98801059, 0.91364736, 0.90097661, 0.88771337, 0.94930232, 0.82752038, 0.87769025, 0.89099416, 0.86809771, 0.86388254, 0.95750904, 0.88763228, 0.84031567, 0.84826675, 0.80866852, 0.61190344, 0.97869875, 0.88262331, 0.63775454, 0.86913646, 0.86695685, 0.87959157, 0.98564233, 0.88770149, 0.9906962, 0.99553302, 0.91703597, 0.84597114, 0.98127512, 0.69643694, 0.9249919, 0.89714683, 0.79966693, 0.89492881, 0.9448586, 0.88928947, 0.86871826, 0.86153848, 0.9954982, 0.79058002, 0.90483579, 0.97913109, 0.85310098, 0.86933744, 0.96875413, 0.86624787, 0.88604885, 0.77016859, 0.8460192, 0.93769572, 0.86927047, 0.82268971, 0.95300068, 0.80288472, 0.92996405, 0.86731819, 0.92432755, 0.91973073, 0.80194425, 0.86048257, 0.82414905, 0.92261709, 0.95190604, 0.80508862, 0.62537147, 0.84545772, 0.90434844, 0.88275031, 0.99509094, 0.84719975, 0.95698127, 0.82143393, 0.90315044, 0.90096902, 0.82223786, 0.96097712, 0.72599096, 0.74590986, 0.92051877, 0.95114875, 0.93269688, 0.97544966, 0.89672537, 0.91239882, 0.81320342, 0.74570002, 0.84387874, 0.80141134, 0.71582938, 0.9697427, 0.9784574, 0.96338679, 0.81904255, 0.88740525, 0.93054533, 0.85109139, 0.87172416, 0.89811103, 0.80898404, 0.78811137, 0.94129289, 0.814432, 0.890625, 0.9800025, 0.67072455, 0.75312253, 0.72497354, 0.91080572, 0.96784362, 0.97635748, 0.84745092, 0.89692368, 0.93240327, 0.96499731, 0.85139814, 0.87893953, 0.88875108, 0.91595621, 0.8651528, 0.96821706, 0.86298308, 0.95679244, 0.76234409, 0.93424626, 0.89160472, 0.89834472, 0.94152265, 0.90585736, 0.98675387, 0.88041004, 0.92668129, 0.94514902, 0.85164121, 0.92756688, 0.96018625, 0.94577463, 0.89567909, 0.67461867, 0.95620961, 0.89311243, 0.82947369, 0.9546196, 0.9575627, 0.9740491, 0.97753101, 0.87455117, 0.86144137, 0.96911729, 0.88236482, 0.90832908, 0.8150134, 0.89537147, 0.88377966, 0.75968003, 0.83503387, 0.74997853, 0.81134279, 0.82434213, 0.97508611, 0.90177745, 0.90877659, 0.89712508, 0.76432754, 0.97255171, 0.97535396, 0.91457617];
    
    // the Routine "experiment_settings" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: num_blocks, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(block_settingsRoutineBegin(snapshot));
      blocksLoopScheduler.add(block_settingsRoutineEachFrame());
      blocksLoopScheduler.add(block_settingsRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(next_blockRoutineBegin(snapshot));
      blocksLoopScheduler.add(next_blockRoutineEachFrame());
      blocksLoopScheduler.add(next_blockRoutineEnd(snapshot));
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(choiceRoutineBegin(snapshot));
      trialsLoopScheduler.add(choiceRoutineEachFrame());
      trialsLoopScheduler.add(choiceRoutineEnd(snapshot));
      trialsLoopScheduler.add(wait_rtRoutineBegin(snapshot));
      trialsLoopScheduler.add(wait_rtRoutineEachFrame());
      trialsLoopScheduler.add(wait_rtRoutineEnd(snapshot));
      trialsLoopScheduler.add(harvestRoutineBegin(snapshot));
      trialsLoopScheduler.add(harvestRoutineEachFrame());
      trialsLoopScheduler.add(harvestRoutineEnd(snapshot));
      trialsLoopScheduler.add(show_applesRoutineBegin(snapshot));
      trialsLoopScheduler.add(show_applesRoutineEachFrame());
      trialsLoopScheduler.add(show_applesRoutineEnd(snapshot));
      trialsLoopScheduler.add(too_slowRoutineBegin(snapshot));
      trialsLoopScheduler.add(too_slowRoutineEachFrame());
      trialsLoopScheduler.add(too_slowRoutineEnd(snapshot));
      trialsLoopScheduler.add(travelRoutineBegin(snapshot));
      trialsLoopScheduler.add(travelRoutineEachFrame());
      trialsLoopScheduler.add(travelRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var block_settingsMaxDurationReached;
var block_settingsMaxDuration;
var block_settingsComponents;
function block_settingsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_settings' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    block_settingsClock.reset();
    routineTimer.reset();
    block_settingsMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('block_settings.started', globalClock.getTime());
    block_settingsMaxDuration = null
    // keep track of which components have finished
    block_settingsComponents = [];
    
    for (const thisComponent of block_settingsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_settingsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_settings' ---
    // get current time
    t = block_settingsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_settingsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var num_apple_index;
var num_apples;
var winnings;
var block_rps;
var task_timer;
var travel_time;
var apple_time;
function block_settingsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_settings' ---
    for (const thisComponent of block_settingsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('block_settings.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_4
    console.log("Setting up block...");
    num_apple_index = Number.parseInt((Math.random() * apple_starts.length));
    num_apples = apple_starts[num_apple_index];
    winnings = (- 1);
    block_rps = [];
    task_timer = new util.CountdownTimer(time_per_block);
    travel_time = block_travel_times[blocks.thisN];
    apple_time = 1.0;
    
    // the Routine "block_settings" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var choiceMaxDurationReached;
var _key_resp_allKeys;
var leave_flag;
var too_slow_flag;
var harvest_flag;
var decision_start_time;
var message;
var choiceMaxDuration;
var choiceComponents;
function choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'choice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    choiceClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    choiceMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // Run 'Begin Routine' code from code
    leave_flag = 0;
    too_slow_flag = 0;
    harvest_flag = 0;
    decision_start_time = task_timer.getTime();
    message = "";
    
    text_6.setText(("Total: " + np.round(total_apples, 1).toString()));
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('choice.started', globalClock.getTime());
    choiceMaxDuration = null
    // keep track of which components have finished
    choiceComponents = [];
    choiceComponents.push(image);
    choiceComponents.push(polygon);
    choiceComponents.push(key_resp);
    choiceComponents.push(text_5);
    choiceComponents.push(text_6);
    choiceComponents.push(mouse);
    
    for (const thisComponent of choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var time_left;
var minutes;
var seconds;
function choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'choice' ---
    // get current time
    t = choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    
    // *polygon* updates
    if (t >= 0.25 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    frameRemains = 0.25 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.25 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    frameRemains = 0.25 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Run 'Each Frame' code from code
    time_left = task_timer.getTime();
    minutes = Number.parseInt((time_left / 60));
    seconds = Number.parseInt((time_left - (minutes * 60)));
    if ((time_left <= 0.0)) {
        trials.finished = true;
        continueRoutine = false;
    }
    
    
    if (text_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_5.setText(`${minutes}:${seconds}`, false);
    }
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    // *mouse* updates
    if (t >= 0.25 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.25 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse.status = PsychoJS.Status.FINISHED;
        }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var k_index;
var k;
var reaction_time;
var wait_time;
function choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'choice' ---
    for (const thisComponent of choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('choice.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // Run 'End Routine' code from code
    if ((key_resp.keys === "down")) {
        message = "Harvesting...";
        total_apples += num_apples;
        winnings = num_apples;
        k_index = Number.parseInt((Math.random() * depletion_rates.length));
        k = depletion_rates[k_index];
        num_apples = (num_apples * k);
        harvest_flag = 1;
        psychoJS.experiment.addData("trials.decision", "harvest");
        psychoJS.experiment.addData("trials.reward", winnings);
    } else {
        if ((key_resp.keys === "right")) {
            if ((winnings !== (- 1))) {
                block_rps.push(winnings);
            }
            num_apple_index = Number.parseInt((Math.random() * apple_starts.length));
            num_apples = apple_starts[num_apple_index];
            leave_flag = 1;
            message = "Travelling...";
            psychoJS.experiment.addData("trials.decision", "leave");
            psychoJS.experiment.addData("trials.reward", 0);
        } else {
            if ((time_left > 0)) {
                too_slow_flag = 1;
                message = "Too slow. Press down to harvest, right to leave.";
                psychoJS.experiment.addData("trials.decision", "too slow");
                psychoJS.experiment.addData("trials.reward", 0);
            } else {
            }
        }
    }
    console.log(message, time_left);
    reaction_time = (decision_start_time - task_timer.getTime());
    wait_time = (1.0 - reaction_time);
    console.log("Reaction time:", reaction_time, "waiting", wait_time);
    psychoJS.experiment.addData("trials.rt", reaction_time);
    psychoJS.experiment.addData("trials.travel_time", travel_time);
    psychoJS.experiment.addData("trials.block_num", blocks.thisN);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    
    if (choiceMaxDurationReached) {
        choiceClock.add(choiceMaxDuration);
    } else {
        choiceClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var wait_rtMaxDurationReached;
var wait_rtMaxDuration;
var wait_rtComponents;
function wait_rtRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait_rt' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    wait_rtClock.reset();
    routineTimer.reset();
    wait_rtMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('wait_rt.started', globalClock.getTime());
    wait_rtMaxDuration = null
    // keep track of which components have finished
    wait_rtComponents = [];
    wait_rtComponents.push(image_6);
    
    for (const thisComponent of wait_rtComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function wait_rtRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait_rt' ---
    // get current time
    t = wait_rtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + wait_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wait_rtComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wait_rtRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait_rt' ---
    for (const thisComponent of wait_rtComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('wait_rt.stopped', globalClock.getTime());
    // the Routine "wait_rt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var harvestMaxDurationReached;
var maxDurationReached;
var harvestMaxDuration;
var harvestComponents;
function harvestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'harvest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    harvestClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    harvestMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(message);
    psychoJS.experiment.addData('harvest.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((harvest_flag == 0));
    maxDurationReached = false
    harvestMaxDuration = null
    // keep track of which components have finished
    harvestComponents = [];
    harvestComponents.push(text);
    harvestComponents.push(image_2);
    
    for (const thisComponent of harvestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function harvestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'harvest' ---
    // get current time
    t = harvestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    
    if (image_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_2.setPos([(0.01 * (np.random.rand() - 0.5)), (0.01 * (np.random.rand() - 0.5))], false);
    }
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from code_6
    time_left = task_timer.getTime();
    if ((time_left <= 0.0)) {
        trials.finished = true;
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of harvestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function harvestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'harvest' ---
    for (const thisComponent of harvestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('harvest.stopped', globalClock.getTime());
    if (harvestMaxDurationReached) {
        harvestClock.add(harvestMaxDuration);
    } else {
        harvestClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var show_applesMaxDurationReached;
var show_applesMaxDuration;
var show_applesComponents;
function show_applesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'show_apples' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    show_applesClock.reset();
    routineTimer.reset();
    show_applesMaxDurationReached = false;
    // update component parameters for each repeat
    image_7.setSize([(0.1 * Number.parseInt(util.round(winnings))), 0.1]);
    image_7.setImage((Number.parseInt(util.round(winnings)).toString() + ".png"));
    psychoJS.experiment.addData('show_apples.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((harvest_flag == 0));
    maxDurationReached = false
    show_applesMaxDuration = null
    // keep track of which components have finished
    show_applesComponents = [];
    show_applesComponents.push(image_4);
    show_applesComponents.push(image_7);
    
    for (const thisComponent of show_applesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function show_applesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'show_apples' ---
    // get current time
    t = show_applesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + apple_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from code_7
    time_left = task_timer.getTime();
    if ((time_left <= 0.0)) {
        trials.finished = true;
        continueRoutine = false;
    }
    
    
    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + apple_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_7.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of show_applesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function show_applesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'show_apples' ---
    for (const thisComponent of show_applesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('show_apples.stopped', globalClock.getTime());
    // the Routine "show_apples" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var too_slowMaxDurationReached;
var too_slowMaxDuration;
var too_slowComponents;
function too_slowRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'too_slow' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    too_slowClock.reset();
    routineTimer.reset();
    too_slowMaxDurationReached = false;
    // update component parameters for each repeat
    text_3.setText(message);
    psychoJS.experiment.addData('too_slow.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((too_slow_flag == 0));
    maxDurationReached = false
    too_slowMaxDuration = null
    // keep track of which components have finished
    too_slowComponents = [];
    too_slowComponents.push(text_3);
    too_slowComponents.push(image_3);
    
    for (const thisComponent of too_slowComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function too_slowRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'too_slow' ---
    // get current time
    t = too_slowClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (apple_time + 1) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (apple_time + 1) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from code_8
    time_left = task_timer.getTime();
    if ((time_left <= 0.0)) {
        trials.finished = true;
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of too_slowComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function too_slowRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'too_slow' ---
    for (const thisComponent of too_slowComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('too_slow.stopped', globalClock.getTime());
    // the Routine "too_slow" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var travelMaxDurationReached;
var tree_pos;
var tree_start_time;
var travelMaxDuration;
var travelComponents;
function travelRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'travel' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    travelClock.reset();
    routineTimer.reset();
    travelMaxDurationReached = false;
    // update component parameters for each repeat
    text_2.setText(message);
    // Run 'Begin Routine' code from code_3
    tree_pos = 0;
    tree_start_time = task_timer.getTime();
    
    psychoJS.experiment.addData('travel.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((leave_flag == 0));
    maxDurationReached = false
    travelMaxDuration = null
    // keep track of which components have finished
    travelComponents = [];
    travelComponents.push(text_2);
    travelComponents.push(image_5);
    
    for (const thisComponent of travelComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var elapsed_progress;
function travelRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'travel' ---
    // get current time
    t = travelClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + travel_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    
    if (image_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_5.setPos([tree_pos, 0], false);
    }
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + travel_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_5.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from code_3
    elapsed_progress = ((tree_start_time - task_timer.getTime()) / travel_time);
    if ((elapsed_progress < 0.5)) {
        tree_pos = ((- 2) * elapsed_progress);
    } else {
        tree_pos = (2 - (2 * elapsed_progress));
    }
    time_left = task_timer.getTime();
    if ((time_left <= 0.0)) {
        trials.finished = true;
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of travelComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function travelRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'travel' ---
    for (const thisComponent of travelComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('travel.stopped', globalClock.getTime());
    // the Routine "travel" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var next_blockMaxDurationReached;
var _key_resp_3_allKeys;
var next_blockMaxDuration;
var next_blockComponents;
function next_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'next_block' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    next_blockClock.reset();
    routineTimer.reset();
    next_blockMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('next_block.started', globalClock.getTime());
    next_blockMaxDuration = null
    // keep track of which components have finished
    next_blockComponents = [];
    next_blockComponents.push(text_9);
    next_blockComponents.push(key_resp_3);
    next_blockComponents.push(mouse_3);
    
    for (const thisComponent of next_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function next_blockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'next_block' ---
    // get current time
    t = next_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: [], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of next_blockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function next_blockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'next_block' ---
    for (const thisComponent of next_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('next_block.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_5
    if ((block_rps.length > 0)) {
        average_rps.push((util.sum(block_rps) / block_rps.length));
    } else {
        average_rps.push(null);
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_3.x', mouse_3.x);
    psychoJS.experiment.addData('mouse_3.y', mouse_3.y);
    psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton);
    psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton);
    psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton);
    psychoJS.experiment.addData('mouse_3.time', mouse_3.time);
    
    // the Routine "next_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var totalMaxDurationReached;
var totalMaxDuration;
var totalComponents;
function totalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'total' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    totalClock.reset();
    routineTimer.reset();
    totalMaxDurationReached = false;
    // update component parameters for each repeat
    text_4.setText(("Your score: " + Number.parseInt(util.round(total_apples)).toString()));
    psychoJS.experiment.addData('total.started', globalClock.getTime());
    totalMaxDuration = null
    // keep track of which components have finished
    totalComponents = [];
    totalComponents.push(text_4);
    
    for (const thisComponent of totalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function totalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'total' ---
    // get current time
    t = totalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of totalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function totalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'total' ---
    for (const thisComponent of totalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('total.stopped', globalClock.getTime());
    // the Routine "total" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
