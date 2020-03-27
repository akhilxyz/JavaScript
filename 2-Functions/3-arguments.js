
// _________Multiple Arguments________

let func1 = function(a,b,c){
    return a+b+c
}

let result  = func1(10,1,2)

console.log(result)

// ___________Defult Arguments___________


let func2 = function(name = 'Enter Name' , score = 0){
    console.log(name)
    console.log(score)
}

func2()
