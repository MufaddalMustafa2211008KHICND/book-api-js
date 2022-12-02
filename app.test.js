//Given that I visit the site, when I first start, I expect my list to be empty.


test('ExpectingReadingListToBeEmptyAtFirst', () => {
    expect(ReadingList).toBe([])
})