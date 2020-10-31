export abstract class Rule {
    abstract allowAction(): boolean

    abstract performAction(modifiedObject: any): any
}