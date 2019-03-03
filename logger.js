const EventEmitter = require('events');
const uuid = require('uuid');

//console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // Call event.
        this.emit('message', {id: uuid.v4(), msg});
    }
}
// module.exports = Logger;
//==================================================
// Below can be in another file if you uncomment the module.export and
// const logger below.

// const Logger = require('./Logger');

const logger = new Logger();
logger.on('message', (data) => console.log('Called listener: ', data));

logger.log("Hello logger");
logger.log("Hi");
logger.log("hello");