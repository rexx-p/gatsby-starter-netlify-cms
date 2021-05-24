import teampost from "../data/team.json";
// Post details
function getMember(id) {
    return teampost.filter(team => { return team.id === parseInt(id) })[0];
}
export { getMember };