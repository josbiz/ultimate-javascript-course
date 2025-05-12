let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue; // Ignore the next logic and continue the while
    }
    if (i === 4) { 
        break; // Quit the while 
    }
    console.log(i);
}