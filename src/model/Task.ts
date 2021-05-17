import {Category} from './Category';

export class Task {
  // tslint:disable-next-line:variable-name
  private _name: string;
  // tslint:disable-next-line:variable-name
  private _description: string;
  // tslint:disable-next-line:variable-name
  private _priority: string;
  // tslint:disable-next-line:variable-name
  private _category: string;
  // tslint:disable-next-line:variable-name
  private _isdone: boolean;


  constructor(name: string, description: string, priority: string, category: string, isdone: boolean) {
    this._name = name;
    this._description = description;
    this._priority = priority;
    this._category = category;
    this._isdone = isdone;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get priority(): string {
    return this._priority;
  }

  set priority(value: string) {
    this._priority = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get isDone(): boolean {
    return this._isdone;
  }

  set isDone(value: boolean) {
    this._isdone = value;
  }
}
