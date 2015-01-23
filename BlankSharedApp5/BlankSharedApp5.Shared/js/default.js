// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();

function runAlert() {
	console.log("You clicked me!");
	getStuff();
}

function getStuff() {
	$.ajax({
		type: "GET",
		url: "http://fsharptester.cloudapp.net/api/cars/woa"
	})

 .success(function (msg) {

 	console.log("Success: " + msg);

 })
 .fail(function (msg) {
 	console.log("Fail: " + msg);

 })

  .done(function (msg) {

  	console.log("Done: " + msg);

  })
}

function getWinner() {
	document.getElementById("winner").innerHTML = Math.floor(Math.random() * 17);
}