export class ConstructableSync {
    onConstructSync() {
        throw new Error("NevermoreJS - 'onConstructSync()' method must be implemented!");
    }
}

export class ConstructableAsync {
    onConstructAsync() {
        throw new Error("NevermoreJS - 'onConstructAsync()' method must be implemented!");
    }
}
