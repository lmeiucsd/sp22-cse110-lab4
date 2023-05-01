for(const property in statistics) {
    if(statistics[property] % 2 == 1 || (property).startsWith("r")){
        console.log(`${statistics[property]}`);
    }
}