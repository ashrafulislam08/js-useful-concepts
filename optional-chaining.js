const user = {
  profile: {
    address: {
      city: "Dhaka, Bangladesh",
    },
  },
};

console.log(user.profile?.address.city);
console.log(user.profile?.contact?.email);

const getEmail = user.profile?.contact?.email ?? "example.ashraful13@gmail.com";
console.log("Your email is:", getEmail);

const user2 = {
  settings: {
    theme: "dark",
  },
};

const key = "0";
console.log(user2.settings?.[key]);
