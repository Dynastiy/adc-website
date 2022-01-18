const states = [{
    "id": 1,
        "name": "Abia",
        "capital": "Umuahia",
        "chairman": "BARR. KELENNA OBONNA"
    },
    {
        "id": 2,
        "name": "Adamawa",
        "capital": "Yola",
        "chairman": "YAHAYA H. YULDE"
    },
    {
        "id": 3,
        "name": "Akwa Ibom",
        "capital": "Uyo",
        "chairman": "HON UTIP ETIEBET"
    },
    {
        "id": 4,
        "name": "Anambra",
        "capital": "Awka",
        "chairman": "PATRICK OBIANYO"
    },
    {
        "id": 5,
        "name": "Bauchi",
        "capital": "Bauchi",
        "chairman": "HASSAN HARUN"
    },
    {
        "id": 6,
        "name": "Bayelsa",
        "capital": "Yenagoa",
        "chairman": "DR. ALEX KOINYAN"
    },
    {
        "id": 7,
        "name": "Benue",
        "capital": "Makurdi",
        "chairman": "HON. ROBERT F. AMEH"
    },
    {
        "id": 8,
        "name": "Borno",
        "capital": "Maiduguri",
        "chairman": "MUHAMMAD KHALA JIDDA "
    },

    {
        "id": 9,
        "name": "Cross River",
        "capital": "Calabar",
        "chairman": "AGBOR ELVIS AGBOR "
    },
    {
        "id": 10,
        "name": "Delta",
        "capital": "Asaba",
        "chairman": "PRINCE JOE CHUKWU "
    },
    {
        "id": 11,
        "name": "Ebonyi",
        "capital": "Abakaliki",
        "chairman": "COMR. NWOGBA MORGAN NNAEMEKA"
    },
    {
        "id": 12,
        "name": "Edo",
        "capital": "Benin",
        "chairman": "MR KENNEDY"
    },
    {
        "id": 13,
        "name": "Ekiti",
        "capital": "Ado-Ekiti",
        "chairman": "HON. ILESANMI JOEL OMOLAYO"
    },
    {
        "id": 14,
        "name": "Enugu",
        "capital": "Enugu",
        "chairman": "STELLA NNEAMAKA  CHUKWUMA"
    },
    {
        "id": 15,
        "name": "Federal Capital Territory",
        "capital": "Abuja",
        "chairman": "HON. CLEMENT"
    },
    {
        "id": 16,
        "name": "Gombe",
        "capital": "Gombe",
        "chairman": "AUWAL ABBA BARDE"
    },
    {
        "id": 17,
        "name": "Imo",
        "capital": "Owerri",
        "chairman": "BARR. NLEM IGNATIUS"
    },
    {
        "id": 18,
        "name": "Jigawa",
        "capital": "Dutse",
        "chairman": "ALH. LAWAN ABDULLAHI"
    },
    {
        "id": 19,
        "name": "Kaduna",
        "capital": "Kaduna",
        "chairman": "COMR. PHILIMON KURE"
    },
    {
        "id": 20,
        "name": "Kebbi",
        "capital": "Birnin Kebbi",
        "chairman": "HAJIYA HAUWA’U MUHAMMED"
    },
    {
        "id": 21,
        "name": "Kano",
        "capital": "Kano",
        "chairman": "HARUNA KABIRU"
    },
    {
        "id": 22,
        "name": "Kogi",
        "capital": "Lokoja",
        "chairman": "KINGSLEY TEMITOPE"
    },
    {
        "id": 23,
        "name": "Lagos",
        "capital": "Ikeja",
        "chairman": ""
    },
    {
        "id": 24,
        "name": "Katsina",
        "capital": "Katsina",
        "chairman": "MUSA USMAN WAMBA FUNTUA"
    },
    {
        "id": 25,
        "name": "Kwara",
        "capital": "Ilorin",
        "chairman": "ADEBAYO AKADI"
    },
    {
        "id": 26,
        "name": "Nasarawa",
        "capital": "Lafia",
        "chairman": "HON. GODWIN A. WILLIAM"
    },
    {
        "id": 27,
        "name": "Niger",
        "capital": "Minna",
        "chairman": "ALH. MUSA HASSAN "
    },
    {
        "id": 28,
        "name": "Ogun",
        "capital": "Abeokuta",
        "chairman": "Odunlami Salami"
    },
    {
        "id": 29,
        "name": "Ondo",
        "capital": "Akure",
        "chairman": "HON.IBRAHIM OLAIDE RASHEED "
    },
    {
        "id": 30,
        "name": "Rivers",
        "capital": "Port Harcourt",
        "chairman": "HON. LEADER SAMPSON"
    },
    {
        "id": 31,
        "name": "Oyo",
        "capital": "Ibadan",
        "chairman": "REV. ADENIRAN ADEGOKE EZEKIEL"
    },
    {
        "id": 32,
        "name": "Osun",
        "capital": "Osogbo",
        "chairman": "DR. CHARLES IDOWU OMIDIJI"
    },
    {
        "id": 33,
        "name": "Sokoto",
        "capital": "Sokoto",
        "chairman": "ARC. MALAMI S. GALMA"
    },
    {
        "id": 34,
        "name": "Plateau",
        "capital": "Jos",
        "chairman": "H.E. SABIU IBRAHIM MUSA"
    },
    {
        "id": 35,
        "name": "Taraba",
        "capital": "Jalingo",
        "chairman": ""
    },
    {
        "id": 36,
        "name": "Yobe",
        "capital": "Damaturu",
        "chairman": "HON. ABUBAKAR ABDULLAHI"
    },
    {
        "id": 37,
        "name": "Zamfara",
        "capital": "Gusau",
        "chairman": "BADAMAS BELLO "
    }
];


const getUserById = (id) => {
    return (id === undefined) ? states[0] : states.find(x => x.id === id);
  };
export{ 
    states,
 getUserById
}