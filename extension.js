const vscode = require('vscode');
var path = require("path");
const { exec } = require('child_process');

const { window, TextEditor, Range, Position } = require('vscode');

function activate(context) {

    let disposable = vscode.commands.registerCommand('extension.convertPlist', function () {
        var currentlyOpenTabfilePath = vscode.window.activeTextEditor.document.fileName;

        exec(`/usr/bin/plutil -convert xml1 ${currentlyOpenTabfilePath}`, (err, stdout, stderr) => {
            
            if (err) {
                console.log(`error: ${err}`);
                return;
            }

            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });

    });

    context.subscriptions.push(disposable);

    let disposable2 = vscode.commands.registerCommand('extension.convertPlistBack', function () {
        var currentlyOpenTabfilePath = vscode.window.activeTextEditor.document.fileName;

        exec(`/usr/bin/plutil -convert binary1 ${currentlyOpenTabfilePath}`, (err, stdout, stderr) => {
            
            if (err) {
                console.log(`error: ${err}`);
                return;
            }

            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });

    });

    context.subscriptions.push(disposable2);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;