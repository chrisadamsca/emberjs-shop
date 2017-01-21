/* nk078 */

const fs = require('fs');
var logger =
{
    log : "",
    logFile : "",
    logErr : function( err)
    {

        var stack = new Error(err).stack.split("\n");

        this.appendToLog( this.logDate() + " | ");
        this.appendToLog( stack[0]+"\n");

        for(var i = 2; i < stack.length && !stack[i].includes("at Module._compile");i++)
        {
            this.appendToLog( stack[i]+"\n");
        }
    },
    logWarn : function ( warn)
    {
        this.appendToLog( this.logDate() + " | Warning: ");

        this.appendToLog( warn+"\n");
    },
    log : function ( log)
    {
        this.appendToLog( log+"\n");
    },
    logDebug : function ( debug)
    {
        this.appendToLog( this.logDate() + " | Debug: ");

        this.appendToLog(  debug+"\n");
    },
    logDate : function()
    {
         return new Date().toUTCString();
    },
    appendToLog : function(append)
    {
        console.log(append.substring(0,append.indexOf("\n")));
        if(this.logFile != "")
        {
            fs.appendFileSync(this.logFile,append,function(err){});
        }
    }


}

module.exports = logger;
