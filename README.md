***TASK-1***

Answer:
Algorithm which is used for this problem is : External mergesort algorithm (wikipedia)
A merge sort divides the unsorted list into n sublists, each containing 1 element, and then repeatedly merges sublists to produce new sorted sublists until there is only 1 sublist remaining.
The external mergesort algorithm sorts chunks that each fit in RAM, then merges the sorted chunks together.For sorting 10 GB of data using only 1 GB of RAM:
step 1: Read 1 GB of the data in main memory and sort by some conventional sorting method, like quicksort.

step 2. Write the sorted data to disk.

step 3. Repeat steps 1 and 2 until all of the data is in sorted 1 GB chunks (there are 10GB / 1 GB = 10 chunks), which now need to be merged into one single output file.

step 4. Read the first 90 MB of each sorted chunk (of 1 GB) into input buffers in main memory and allocate the remaining 100 MB for an output buffer. (In practice, it might provide better performance to make the output buffer larger and the input buffers slightly smaller.)

step 5. Perform a 10-way merge and store the result in the output buffer. Whenever the output buffer fills, write it to the final sorted file and empty it. Whenever any of the 10 input buffers empties, fill it with the next 90 MB of its associated 1GB sorted chunk until no more data from the chunk is available. This is the key step that makes external merge sort work externally -- because the merge algorithm only makes one pass sequentially through each of the chunks, each chunk does not have to be loaded completely; rather, sequential parts of the chunk can be loaded as needed.

***End of Task 1***


***TASK-2***


TA-Task

open Terminal

run:
``` git clone git@github.com:Ajaytarpara/TA-TASK.git ```

open that folder in any editor (like vscode, sublime, webstorm etc)

run: 
 ``` npm i```

now make *.env* file which is copy of *.env.example*

after this change path to src or directly run npm start

run:
``` cd src ```

and Now you are ready to take off

run:
``` node index.js```

Postman link : ```https://www.getpostman.com/collections/5374afa7f26ef50c237a```


It may be possibale you get error while run this code then you can solve by doing this
- you might forgot to start mongo service
- you might forgot to make .env file from .env.example
- you might forgot to run code npm i
- you might using lower version of node
- you might run code from differnt path if you are inside TA-TASK then you can use npm start if you are inside of src then run node index.js


***End of Task 2***
