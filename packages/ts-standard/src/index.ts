import { Man, Woman } from './models/person'

export function greeting( names : {boy: string; girl: string} ) {
    const man = new Man(names.boy)
    const woman = new Woman(names.girl)
    return man.say() + ', ' + woman.say()  
}



