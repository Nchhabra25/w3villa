# Dictionary Web App

## Data Structures Used

**1) Array:**
The dictionary is stored in an array where each element represents a word entry.

Example:

```
[
 {word: "apple", definition: "a fruit", frequency: 2}
]
```

**2) Object:**
Each word is stored as an object containing:

* `word` – the dictionary word
* `definition` – meaning of the word
* `frequency` – number of times the word was searched

---

## Logic and Approach

**1) Add Word:**
Prompts the user to enter a word and definition. The program checks if the word already exists before adding it to the dictionary.

**2) Search Word:**
Loops through the dictionary array to find a matching word. If found, it displays the word, its definition, and increases the search frequency.

**3) Suggestions:**
While typing in the search box, the program suggests words that start with the typed letters. Suggestions are sorted by highest frequency and only the top 3 are displayed.

---

## How to Run the Code

1. Place `index.html` and `new.js` in the same folder.
2. Open `index.html` in a web browser.
3. The dictionary interface will appear.

---

## How to Test

* Click **Enter a new Word** to add words.
* Type in the search box to see suggestions.
* Click **Search** to display the word and definition.
* Search multiple times to see the **frequency increase**.

---

## Assumptions

* Words are stored in **lowercase** to avoid duplicates.
* The dictionary is stored **in memory**, so refreshing the page resets all data.
* Suggestions only show the **first 3 matches sorted by frequency**.
