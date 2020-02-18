export default function viewCode2roles(arr) {
  let data = { roles: [], name: "", meta: {} };
  data.name = arr[0].name;

  arr.forEach(item => {
    if (item.viewCode && item.viewCode !== "") {
      if (!data.roles.includes(item.viewCode)) {
        data.roles.push(item.viewCode);
      }
      let subRoles = `${item.viewCode}`;
      if (item.breedId) {
        subRoles = subRoles + `_${item.breedId}`;
      }
      data.roles.push(subRoles);
      data.meta = item;
    }
  });

  return data;
}
