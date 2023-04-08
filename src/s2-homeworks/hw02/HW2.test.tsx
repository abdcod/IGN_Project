import {AffairType, FilterType} from "./HW2";

test("it's wright filter to filter affairs", () => {

    const defaultAffairs: Array<AffairType> = [
        {_id: 1, name: 'React', priority: 'high'},
        {_id: 2, name: 'anime', priority: 'low'},
        {_id: 3, name: 'games', priority: 'low'},
        {_id: 4, name: 'work', priority: 'high'},
        {_id: 5, name: 'html & css', priority: 'middle'},
    ]
    const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {

        switch (filter) {
            case "high":
                return affairs.filter(item => item.priority === "high");
            case "low":
                return affairs.filter(item => item.priority === "low");
            case "middle":
                return affairs.filter(item => item.priority === "middle");
            default:
                return affairs;
        }
    }

    const testhigh = filterAffairs(defaultAffairs, "high");
    const testlow = filterAffairs(defaultAffairs, "low");
    const testmiddle = filterAffairs(defaultAffairs, "middle");
    const testall = filterAffairs(defaultAffairs, "all");


    expect(testhigh.length).toBe(2);
    expect(testhigh[0]._id).toBe(1);
    expect(testhigh[1]._id).toBe(4);

    expect(testlow.length).toBe(2);
    expect(testlow[0]._id).toBe(2);
    expect(testlow[1]._id).toBe(3);

    expect(testmiddle.length).toBe(1);
    expect(testmiddle[0]._id).toBe(5);

    expect(testall.length).toBe(5);
    expect(testall[0]._id).toBe(1);
    expect(testall[3]._id).toBe(4);


})

test("it's wright function deleteAffair", () => {

    const defaultAffairs: Array<AffairType> = [
        {_id: 1, name: 'React', priority: 'high'},
        {_id: 2, name: 'anime', priority: 'low'},
        {_id: 3, name: 'games', priority: 'low'},
        {_id: 4, name: 'work', priority: 'high'},
        {_id: 5, name: 'html & css', priority: 'middle'},
    ]

    const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {

        const afterDeleteAffairs = affairs.filter(item => item._id !== _id);
        return afterDeleteAffairs;
    }

    const testWithout_1 = deleteAffair(defaultAffairs, 1);

    expect(testWithout_1.length).toBe(4);

    const testWithout_2 = deleteAffair(testWithout_1, 2);

    expect(testWithout_2.length).toBe(3);

    const testWithout_3 = deleteAffair(testWithout_2, 3);

    expect(testWithout_3.length).toBe(2);

    const testWithout_4 = deleteAffair(testWithout_3, 4);

    expect(testWithout_4.length).toBe(1);

    const testWithout_5 = deleteAffair(testWithout_4, 5);

    expect(testWithout_5.length).toBe(0);

})