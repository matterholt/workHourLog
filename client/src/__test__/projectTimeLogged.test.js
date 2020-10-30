import { projectTimeLogged } from '../helpers/projectTimeLogged'



test("builds the projected time that user could leave", () => {
    expect(projectTimeLogged("08:00", '8')).toBe('16:27')
    expect(projectTimeLogged("08:00", "8.5")).toBe("16:57");
    expect(projectTimeLogged("07:30", "8")).toBe("16:00");
})