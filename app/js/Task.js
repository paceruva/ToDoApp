function Task(name) {
    this.taskName = name;
    this.state = "Active";

    function setState(newState) {
        this.state = newState;
    }
}