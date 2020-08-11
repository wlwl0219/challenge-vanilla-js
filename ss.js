function deletePending(event) {
    const li = event.target.parentNode;
    console.log(li);
    pendingList.removeChild(li);
    pendingArray = pendingArray.filter(function (task) {
        return task.id !== parseInt(li.id);
    });
    console.log(pendingArray);
    savePending();
}

function deleteFinished(event) {
    const li = event.target.parentNode;
    finishedList.removeChild(li);
    finishedArray = finishedArray.filter(function (task) {
        return task.id !== parseInt(li.id);
    });
    saveFinished();
}

function deletePendingHandler(event) {
    deletePending(event);
}

function deleteFinishedHandler(event) {
    deleteFinished(event);
}

function penToFin(event) {
    deletePending(event);
    const li = event.target.parentNode;
    const text = li.childNodes[0].innerText;
    paintFinished(text);
}

function finToPen(event) {
    deleteFinished(event);
    const li = event.target.parentNode;
    const text = li.childNodes[0].innerText;
    paintPending(text);
}


function sortPending() {
    let idx = 1;
    pendingArray.forEach(function (task) {
        task.id = idx++;
    });
    idx = 1;
    pendingList.childNodes.forEach(function (node) {
        node.id = idx++;
    });
}

function sortFinished() {
    let idx = 1;
    finishedArray.forEach(function (task) {
        task.id = idx++;
    });
    idx = 1;
    finishedList.childNodes.forEach(function (node) {
        node.id = idx++;
    });
}