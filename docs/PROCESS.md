<<<<<<< HEAD
What did I build?
I built hover tooltips for the Charmwell charms on the index page. When I hover a charm, a tooltip shows the name, rarity, price, stock, and description from the JSON data.

How did micro iteration feel?
It felt good and natural. Small steps made the code cleaner than big chunks, and it helped me learn. It was slower, but the quality was better.

What did self review catch?
It caught a real bug. The tooltip was fixed position but the code added scrollY, so it slid down and got cut off. Fixing that made the tooltip behave correctly.

Tool impressions about Copilot Agent and Claude Web
Copilot Agent felt more direct and easier to use inside the editor. It made focused changes fast. Claude Web felt more verbose. Copilot was more practical for this kind of work.

Self review patterns
The AI was good at catching positioning and compatibility issues. It missed a workflow detail I caught myself, like realizing we did not need extra data attributes once we switched to JSON.

Browser tool vs CLI comparison
CLI is harder for me because I am bad at visualizing. It is easy to get lost in commands and make mistakes. The browser based editor felt clearer and easier to control.

When would I use micro iteration and self review?
=======
What did I build?
I built hover tooltips for the Charmwell charms on the index page. When I hover a charm, a tooltip shows the name, rarity, price, stock, and description from the JSON data.

How did micro iteration feel?
It felt good and natural. Small steps made the code cleaner than big chunks, and it helped me learn. It was slower, but the quality was better.

What did self review catch?
It caught a real bug. The tooltip was fixed position but the code added scrollY, so it slid down and got cut off. Fixing that made the tooltip behave correctly.

Tool impressions about Copilot Agent and Claude Web
Copilot Agent felt more direct and easier to use inside the editor. It made focused changes fast. Claude Web felt more verbose. Copilot was more practical for this kind of work.

Self review patterns
The AI was good at catching positioning and compatibility issues. It missed a workflow detail I caught myself, like realizing we did not need extra data attributes once we switched to JSON.

Browser tool vs CLI comparison
CLI is harder for me because I am bad at visualizing. It is easy to get lost in commands and make mistakes. The browser based editor felt clearer and easier to control.

When would I use micro iteration and self review?
>>>>>>> 89cae801c3211520be0e842b7a189a460ca54b9d
I would use it for UI and interactive features where small changes can break things. I would skip it for tiny fixes or throwaway scripts where the overhead is not worth it.