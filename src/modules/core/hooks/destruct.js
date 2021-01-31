export class DestructableSync {
    onDestructSync() {
        throw new Error("NevermoreJS - 'onDestructSync()' method must be implemented!");
    }
}

export class DestructableAsync {
    onDestructAsync() {
        throw new Error("NevermoreJS - 'onDestructAsync()' method must be implemented!");
    }
}
