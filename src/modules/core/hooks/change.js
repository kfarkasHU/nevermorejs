export class Changeable {
    onChanged() {
        throw new Error("NevermoreJS - 'onChanged()' method must be implemented!");
    }
}
