export default function team() {
  const team = [
    {
      name: "Yifan Bao",
      position: "CEO",
      intro: "I am ..... Most of mywork is open .",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Sunglasses&hairColor=PastelPink&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Pale",
    },
    {
      name: "Harry Potter",
      position: "CFO",
      intro: "I am ..... Most of mywork is open .",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Round&hairColor=Auburn&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=BlazerShirt&clotheColor=Black&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Light",
    },
    {
      name: "XXxxxx",
      position: "Mater mower",
      intro:
        "I am ..... Most of mywork is open aksjdl alsdjads asdkljasdlkjasld  as dlkjasl dasl djlas djjas dkljas dkljasdlla .",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&hatColor=PastelBlue&facialHairType=BeardMedium&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Hearts&eyebrowType=Default&mouthType=Grimace&skinColor=Brown",
    },
    {
      name: "Bill Gatsby",
      position: "Cleaner",
      intro: "I am ..... Most of mywork is open .",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Red&facialHairType=MoustacheFancy&facialHairColor=Platinum&clotheType=CollarSweater&clotheColor=White&eyeType=Squint&eyebrowType=Angry&mouthType=ScreamOpen&skinColor=Brown",
    },
  ];
  return (
    <div className="flex">
      {team.map((i) => (
        <div
          key={i.name}
          class="grid grid-cols-1 md:grid-cols-2 gap-1 my-3 max-w-md m-5"
        >
          <div>
            <img
              class="rounded-md w-screen md:w-48 h-48 object-contain"
              src={i.avatar}
              alt={i.name}
            />
          </div>
          <div class="p-4 md:p-0">
            <div class="text-xl font-gray-900">{i.name}</div>
            <div class="text-sm italic">{i.position}</div>
            <div class="text-sm">{i.intro}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
