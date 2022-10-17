fn main() {
    println!("Calculate Two number");

    let array: [u32; 8] = [3, 5, 4, 8, 11, 1, 1, 6];

    let result = two_number_sum(array, 8);

    // println!("{}",result);
}


fn two_number_sum(array:[u32; 8], target:u32) {
    println!("Hola");
    // X + Y = Target
    // Target - X = Y

    // Loop
        // test = Target - X
        // if X in dict found
        // else store test in dict

    for i in 0..array.len() {
        println!("{}", array[i]);
        
    }
    
    // println!("{}",array);
}