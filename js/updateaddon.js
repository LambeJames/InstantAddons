window.onload = function(){
    // change event function to either simulateCurrentPatch, simulatePatchWithNoSpinner, simulatePatchWithButtonSpinner to see suggested options
    document.getElementById("NoClaimsDiscountProtection-yes").addEventListener("click", simulateCurrentPatch);
};

function simulatePatchWithButtonSpinner() {
    const patchDuration = 1000;
    const getPriceDuration = 500;
    const notificationDisplayDuration = 5000;

    showButtonSpinner();
    setTimeout(() => {
        hideButtonSpinner();
        setTimeout(() => {
            showNotification();
            setNewPrice();
            setTimeout(() => {
                hideNotification();
            }, notificationDisplayDuration)
        }, getPriceDuration);
    }, patchDuration);
}

function simulatePatchWithNoSpinner() {
    const patchDuration = 2000;
    const notificationDisplayDuration = 5000;

    setTimeout(() => {
        showNotification();
        setNewPrice();
        setTimeout(() => {
            hideNotification();
        }, notificationDisplayDuration)
    }, patchDuration);
}

function simulateCurrentPatch() {
    const patchDuration = 2000;
    const notificationDisplayDuration = 5000;

    showSpinner();
    setTimeout(() => {
        hideSpinner();
        showNotification();
        setNewPrice();
        setTimeout(() => {
            hideNotification();
            basket-aside-price-annually
        }, notificationDisplayDuration)
    }, patchDuration);
}

function setNewPrice() {
    document.getElementById("basket-aside-price-annually").innerHTML = "£825.10 <span>/ year</span>";
    document.getElementById("totalAnnualPrice").innerHTML = "£825.10";
    
}

function showSpinner() {
    document.getElementById("overlay").classList.remove("hide");
}

function hideSpinner() {
    document.getElementById("overlay").classList.add("hide");
}

function showButtonSpinner() {
    document.getElementById("NoClaimsDiscountProtection-yes-label").setAttribute("style", "background-image: url(./images/loading.gif);");
}

function hideButtonSpinner() {
    document.getElementById("NoClaimsDiscountProtection-yes-label").setAttribute("style", "background-image: url(https://rac-stg.bglgroup.io/MotorQuote/Content/dist/images/icon-plus-circle--white-fill.svg);");
}


function showNotification() {
    document.getElementById("houstonNotification").setAttribute("style", "display: block;");
}

function hideNotification() {
    document.getElementById("houstonNotification").setAttribute("style", "display: none;");
}

