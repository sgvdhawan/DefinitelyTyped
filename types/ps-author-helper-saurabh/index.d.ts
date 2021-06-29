// Type definitions for ps-author-helper-saurabh 1.0
// Project: https://github.com/sgvdhawan/ps-author-helper#readme
// Definitions by: Saurabh Dhawan <https://github.com/sgvdhawan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript version: 4.3

export function greet(name: string): string;
export function getAuthorContactInfo(): AuthorInfo;
export function getModuleName(
    moduleNumber: number,
):
    | 'Introduction to My Course'
    | 'Declaration File Fundamentals'
    | 'Building a Declaration File'
    | 'Publishing Your Own Library'
    | 'No such module exists';
export class AuthorInfo {
    firstName: string;
    lastName: string;
    twitterHandler: string;
    constructor(firstName: string, lastName: string, twitterHandler: string);
}
