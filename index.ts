const planets: string[] = ['earth', 'sxab-74'];
const piValues: {
    [key: string]: number
} = {
    'earth': 3.14,
    'sxab-74': 3.0,
};
// aValue array
const aValues: number[] = [2, 3, 5, 6, 5, 7];
type Tdata = { [key: string]: { [key: string]: number } }
// memory storage for each function
let bazMemory: Tdata = {};
let foobarMemory: Tdata = {};
let fooMemory: Tdata = {};
let barMemory: Tdata = {};
let acMemory: Tdata = {};
let aqMemomry: { [key: string]: number } = {};
let sasMemory: Tdata = {};

const aq = (a: number): number => {
    if (aqMemomry && aqMemomry[`${a}`]) {
        return aqMemomry && aqMemomry[`${a}`];
    } else {
        const aqValue = a * a;
        if (!(aqMemomry)) {
            Object.assign(aqMemomry, { [a]: aqValue })
        }
        if (aqMemomry && !aqMemomry[`${a}`]) {
            aqMemomry = { ...aqMemomry, [a]: aqValue }
        }
        return aqValue;
    }
}

const bar = (a: number, planet: string): number => {
    if (barMemory && barMemory[planet] && barMemory[planet][`${a}`]) {
        return barMemory[planet] && barMemory[planet][`${a}`];
    } else {
        const barValue = aq(a) + 5;
        if (!(barMemory)) {
            Object.assign(barMemory, { [planet]: { [a]: barValue } })
        }
        if (barMemory && !barMemory[planet]) {
            barMemory = { ...barMemory, [planet]: { [a]: barValue } }
        }
        if (barMemory && barMemory[planet] && !barMemory[planet][`${a}`]) {
            barMemory = { ...barMemory, [planet]: { ...barMemory[planet], [a]: barValue } }
        }
        return barValue;
    }
}
const ac = (a: number, planet: string): number => {
    if (acMemory && acMemory[planet] && acMemory[planet][`${a}`]) {
        return acMemory[planet] && acMemory[planet][`${a}`];
    } else {
        const acValue = (piValues[planet] || piValues.earth) * a * a;
        if (!(acMemory)) {
            Object.assign(acMemory, { [planet]: { [a]: acValue } })
        }
        if (acMemory && !acMemory[planet]) {
            acMemory = { ...acMemory, [planet]: { [a]: acValue } }
        }
        if (acMemory && acMemory[planet] && !acMemory[planet][`${a}`]) {
            acMemory = { ...acMemory, [planet]: { ...acMemory[planet], [a]: acValue } }
        }
        return acValue;
    }
};

const sas = (a: number, planet: string) => ac(a, planet) + aq(a);

const foo = (a: number, planet: string): number => {
    if (fooMemory && fooMemory[planet] && fooMemory[planet][`${a}`]) {
        return foobarMemory[planet] && foobarMemory[planet][`${a}`];
    } else {
        const fooValue = ac(a, planet) % 5;
        if (!(fooMemory)) {
            Object.assign(fooMemory, { [planet]: { [a]: fooValue } })
        }
        if (fooMemory && !fooMemory[planet]) {
            fooMemory = { ...fooMemory, [planet]: { [a]: fooValue } }
        }
        if (fooMemory && fooMemory[planet] && !fooMemory[planet][`${a}`]) {
            fooMemory = { ...fooMemory, [planet]: { ...fooMemory[planet], [a]: fooValue } }
        }
        return fooValue;
    }
};
const foobar = (a: number, planet: string): number => {
    if (foobarMemory && foobarMemory[planet] && foobarMemory[planet][`${a}`]) {
        return foobarMemory[planet] && foobarMemory[planet][`${a}`];
    } else {
        const foobarValue = foo(a, planet) + bar(a, planet);
        if (!(foobarMemory)) {
            Object.assign(foobarMemory, { [planet]: { [a]: foobarValue } })
        }
        if (foobarMemory && !foobarMemory[planet]) {
            foobarMemory = { ...foobarMemory, [planet]: { [a]: foobarValue } }
        }
        if (foobarMemory && foobarMemory[planet] && !foobarMemory[planet][`${a}`]) {
            foobarMemory = { ...foobarMemory, [planet]: { ...foobarMemory[planet], [a]: foobarValue } }
        }
        return foobarValue;
    }
}
const baz = (a: number, planet: string): number => {
    if (bazMemory && bazMemory[planet] && bazMemory[planet][`${a}`]) {
        return bazMemory[planet] && bazMemory[planet][`${a}`];
    } else {
        let final: number = 0;
        for (let i = 0; i < 100; i++) {
            final = final + foobar(a, planet);
        }
        if (!(bazMemory)) {
            Object.assign(bazMemory, { [planet]: { [a]: final } })
        }
        if (bazMemory && !bazMemory[planet]) {
            bazMemory = { ...bazMemory, [planet]: { [a]: final } }
        }
        if (bazMemory && bazMemory[planet] && !bazMemory[planet][`${a}`]) {
            bazMemory = { ...bazMemory, [planet]: { ...bazMemory[planet], [a]: final } }
        }
        return final;
    }
}

const DKB = (): void => {
    let valuesTwo: number[][] = [];
    aValues.forEach(a => {
        let values: number[] = [];
        planets.forEach((planet: string) => {
            values.push(baz(a, planet))
        });
        valuesTwo.push(values);
        console.log(valuesTwo);
    });
    valuesTwo.forEach((val, i) => {
        const minValue = Math.min(...val);
        console.log(`The smallest value for planet ${planets[val.indexOf(minValue)]}
        for a value ${aValues[i]} is ${minValue}`)
    })
}

DKB();
