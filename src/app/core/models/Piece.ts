import { Rule } from 'src/app/core/models/Rule'

export class Piece {
    name: string
    description: string
    rules: Map<string, Rule>

    constructor(name: string)
    constructor(name: string, description: string = '', rules: Map<string, Rule> = new Map()) {
        this.name = name
        this.description = description
        this.rules = rules
    }

}