export class Note {
  constructor(id, text) {
    this.notes = [];
    this.id = id;
    this.text = text;
  }

  get id() {
    return this._id;
  }

  get text() {
    return this._text;
  }

  set id(newValue) {
    this._id = newValue;
  }

  set text(newValue) {
    this._text = newValue;
  }

  create() {
    const newNote = {
      id: this.id,
      text: this.text,
    };
    this.notes.push(newNote);
    return this.notes;
  }
}
