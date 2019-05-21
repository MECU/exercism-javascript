export function solve(x, y)
{
    // Calculate distance
    let distance = Math.sqrt(x ** 2 + y ** 2);
    
    // >10 = 0 points
    if (distance > 10) {
        return 0;
    }

    // > 5 = 1 points
    if (distance > 5) {
        return 1;
    }

    // > 1 = 5 points
    if (distance > 1) {
        return 5;
    }

    // 10 points
    return 10;
}
