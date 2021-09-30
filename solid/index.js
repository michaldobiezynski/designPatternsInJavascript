const fs = require("fs");

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    const entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }
  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  save(filename) {
    fs.writeFileSync(filename, this.toString());
  }

  load(filename) {}

  loadFromUrl(url) {}
}

Journal.count = 0;

class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

const j = new Journal();
j.addEntry("I cried today");
j.addEntry("I ate a bug.");

let p = new PersistenceManager();
filename = __dirname + "/journal.txt";
p.saveToFile(j, filename);


// separation of concerns
