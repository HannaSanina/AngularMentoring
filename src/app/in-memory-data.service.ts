import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const courses = [
            {
                "title": "Art",
                "duration": 220,
                "createdDate": "2018-01-01",
                "description": "The whole history of modern art",
                "id": "4"
            },
            {
                "title": "Introduction to AngularJS Material",
                "duration": 120,
                "createdDate": "2017-01-07",
                "description": "Angular Material is an Angular-native, UI component framework from Google. It is a reference implementation of Google's Material Design and provides >30 UI components and services essential for mobile and desktop AngularJS applications.In this course, we will quickly build a real-work application Angular UI application, take a tour of Angular Material, and learn how ngMaterial can be used in your projects.",
                "id": "1",
                "isTopRated": true
            }, {
                "title": "Step-by-Step Async JavaScript with RxJS",
                "duration": 90,
                "createdDate": "2017-01-01",
                "description": "RxJS is tremendously helpful in working with asynchronous code, but you’ve probably been stuck trying to use concepts you already know from Promises or Callbacks and applying them directly to RxJS. These lessons walk you through the step-by-step of building a simple game application with many asynchronous pieces. Each lesson focuses on a single operator or idea of how RxJS helps simplify your code as well as making you code flexible enough to easily add more asynchronous pieces as your codebase grows.",
                "id": "2"
            }, {
                "title": "Save time avoiding common mistakes using RxJS",
                "duration": 220,
                "createdDate": "2017-12-17",
                "description": "In this course we will learn to identify common mistakes with RxJS that usually make code harder to read and even introduce bugs. Most of these mistakes are related to Subject, subscribe, and subscriptions. We are going to see how to use only Observables and convenient operators made for solving those mistakes, such as fromEvent, takeUntil and switchMap. By the end of this course, you will have a more immediate intuition on what patterns are simple and safe in RxJS.",
                "id": "3",
                "isTopRated": true
            },
            {
                "id": 4480,
                "title": "quis tempor veniam quis",
                "description": "Sit velit eiusmod amet tempor ex ad voluptate commodo laborum ipsum. Quis sunt excepteur aliquip esse exercitation laboris duis eu est qui duis. Mollit cupidatat qui laborum ea nisi eu do ex duis ad elit pariatur eiusmod.",
                "isTopRated": false,
                "createdDate": "2016-10-27T23:26:43+00:00",
                "authors": [
                    {
                        "id": 4713,
                        "firstName": "Gordon",
                        "lastName": "Marquez"
                    },
                    {
                        "id": 6540,
                        "firstName": "Ingram",
                        "lastName": "Heath"
                    },
                    {
                        "id": 3004,
                        "firstName": "Avila",
                        "lastName": "Rivera"
                    }
                ],
                "duration": 293
            },
            {
                "id": 2195,
                "title": "fugiat laborum deserunt ut",
                "description": "Id in veniam do ipsum. Cillum irure adipisicing esse deserunt elit cupidatat sint ad Lorem ex deserunt. Sunt sunt ea Lorem Lorem consequat sint anim voluptate exercitation.",
                "isTopRated": true,
                "createdDate": "2016-06-14T16:29:15+00:00",
                "authors": [
                    {
                        "id": 1834,
                        "firstName": "Desiree",
                        "lastName": "Moran"
                    },
                    {
                        "id": 9942,
                        "firstName": "Bertie",
                        "lastName": "Rollins"
                    },
                    {
                        "id": 2256,
                        "firstName": "Patel",
                        "lastName": "Good"
                    },
                    {
                        "id": 4222,
                        "firstName": "Nola",
                        "lastName": "Vaughn"
                    }
                ],
                "duration": 178
            },
            {
                "id": 1430,
                "title": "veniam ex dolore excepteur",
                "description": "Qui anim voluptate eu incididunt. Labore qui laborum nostrud id in do. Do cillum enim cillum reprehenderit ad do exercitation veniam.",
                "isTopRated": true,
                "createdDate": "2017-03-22T02:33:34+00:00",
                "authors": [
                    {
                        "id": 6740,
                        "firstName": "Huff",
                        "lastName": "Blackwell"
                    },
                    {
                        "id": 8401,
                        "firstName": "Castaneda",
                        "lastName": "Soto"
                    },
                    {
                        "id": 6569,
                        "firstName": "Eaton",
                        "lastName": "Stout"
                    }
                ],
                "duration": 55
            },
            {
                "id": 5534,
                "title": "nisi ut tempor quis",
                "description": "Minim officia tempor aute eiusmod cillum fugiat. Nostrud aliquip magna deserunt elit laborum dolor. Sunt ad officia cupidatat ea cillum ex magna excepteur minim et.",
                "isTopRated": false,
                "createdDate": "2017-07-09T09:40:02+00:00",
                "authors": [
                    {
                        "id": 2871,
                        "firstName": "Burgess",
                        "lastName": "Franklin"
                    },
                    {
                        "id": 1123,
                        "firstName": "Willie",
                        "lastName": "Mcdonald"
                    },
                    {
                        "id": 4264,
                        "firstName": "Katheryn",
                        "lastName": "Roy"
                    }
                ],
                "duration": 195
            },
            {
                "id": 3028,
                "title": "et culpa duis duis",
                "description": "Culpa sunt ad dolore amet excepteur quis dolor cupidatat. Cillum laboris ex in dolor. Cillum nulla pariatur labore labore mollit id velit sit deserunt deserunt.",
                "isTopRated": false,
                "createdDate": "2016-06-26T07:41:14+00:00",
                "authors": [
                    {
                        "id": 8166,
                        "firstName": "Cardenas",
                        "lastName": "Mclaughlin"
                    },
                    {
                        "id": 9073,
                        "firstName": "Isabelle",
                        "lastName": "Vargas"
                    },
                    {
                        "id": 1256,
                        "firstName": "Vance",
                        "lastName": "Skinner"
                    }
                ],
                "duration": 147
            },
            {
                "id": 6018,
                "title": "occaecat exercitation nisi amet",
                "description": "Nostrud incididunt enim magna laboris proident. Exercitation sunt laborum dolor adipisicing veniam ipsum esse sint enim aliquip fugiat irure deserunt. Esse elit culpa quis nostrud.",
                "isTopRated": false,
                "createdDate": "2016-07-08T05:31:13+00:00",
                "authors": [
                    {
                        "id": 1461,
                        "firstName": "Meagan",
                        "lastName": "Atkinson"
                    },
                    {
                        "id": 8741,
                        "firstName": "Adriana",
                        "lastName": "Stokes"
                    },
                    {
                        "id": 9646,
                        "firstName": "Trujillo",
                        "lastName": "Whitaker"
                    },
                    {
                        "id": 5974,
                        "firstName": "Margaret",
                        "lastName": "Fields"
                    }
                ],
                "duration": 93
            },
            {
                "id": 4302,
                "title": "officia irure mollit deserunt",
                "description": "Nostrud ipsum labore ad eu labore elit culpa id minim amet. Deserunt quis consectetur non excepteur sit aliquip tempor eiusmod consectetur laborum. Elit irure et sunt aliqua eu aliquip aute fugiat nostrud.",
                "isTopRated": true,
                "createdDate": "2016-02-29T07:52:53+00:00",
                "authors": [
                    {
                        "id": 8977,
                        "firstName": "Rachael",
                        "lastName": "Huber"
                    },
                    {
                        "id": 5783,
                        "firstName": "Maryanne",
                        "lastName": "Robles"
                    },
                    {
                        "id": 4665,
                        "firstName": "Stout",
                        "lastName": "Gould"
                    },
                    {
                        "id": 4138,
                        "firstName": "Carolina",
                        "lastName": "Mullen"
                    }
                ],
                "duration": 197
            },
            {
                "id": 9364,
                "title": "est consectetur minim aute",
                "description": "Anim exercitation ex laborum cillum deserunt cupidatat pariatur aliquip. Irure elit velit ex laborum consequat aliquip aute pariatur. Exercitation sint nostrud in aliquip laborum ad dolore anim fugiat.",
                "isTopRated": true,
                "createdDate": "2016-12-14T13:12:46+00:00",
                "authors": [
                    {
                        "id": 3507,
                        "firstName": "Wagner",
                        "lastName": "Everett"
                    },
                    {
                        "id": 8934,
                        "firstName": "Stewart",
                        "lastName": "Riley"
                    },
                    {
                        "id": 7684,
                        "firstName": "Angelita",
                        "lastName": "Taylor"
                    },
                    {
                        "id": 4433,
                        "firstName": "Forbes",
                        "lastName": "Branch"
                    }
                ],
                "duration": 240
            },
            {
                "id": 1341,
                "title": "occaecat Lorem deserunt esse",
                "description": "Officia mollit tempor aute ad culpa aliqua do ullamco nulla. Ea in deserunt commodo aute eiusmod nostrud sit amet labore. Dolor labore laboris ad consectetur irure occaecat enim ea velit non pariatur reprehenderit nulla occaecat.",
                "isTopRated": true,
                "createdDate": "2016-07-08T15:06:38+00:00",
                "authors": [
                    {
                        "id": 6068,
                        "firstName": "Nelda",
                        "lastName": "Castro"
                    }
                ],
                "duration": 356
            },
            {
                "id": 9270,
                "title": "culpa sint ut fugiat",
                "description": "Elit ad Lorem nostrud fugiat nostrud et consectetur duis sunt voluptate aliqua. Ex minim consectetur nostrud nostrud pariatur anim amet consequat. Amet ad occaecat do aliqua adipisicing minim esse duis mollit aute Lorem officia occaecat amet.",
                "isTopRated": false,
                "createdDate": "2016-06-09T23:27:17+00:00",
                "authors": [
                    {
                        "id": 8652,
                        "firstName": "Fleming",
                        "lastName": "Espinoza"
                    }
                ],
                "duration": 349
            },
            {
                "id": 321,
                "title": "sit cillum id incididunt",
                "description": "In duis sit excepteur quis fugiat ex commodo reprehenderit quis. Qui consequat nulla aliquip voluptate reprehenderit deserunt exercitation amet sint et ut in culpa. Nulla ex aliqua ipsum eu irure adipisicing aute ad do.",
                "isTopRated": false,
                "createdDate": "2016-03-31T09:44:07+00:00",
                "authors": [
                    {
                        "id": 1458,
                        "firstName": "Yolanda",
                        "lastName": "Wade"
                    },
                    {
                        "id": 4660,
                        "firstName": "Tanisha",
                        "lastName": "Sanders"
                    },
                    {
                        "id": 971,
                        "firstName": "Melton",
                        "lastName": "Moody"
                    },
                    {
                        "id": 3493,
                        "firstName": "Eva",
                        "lastName": "Wolf"
                    }
                ],
                "duration": 304
            },
            {
                "id": 6450,
                "title": "est adipisicing sint fugiat",
                "description": "Do sunt laboris adipisicing officia commodo laboris ad amet sint. Qui excepteur nulla dolor laboris nostrud est ullamco Lorem incididunt. Veniam ex ipsum laborum sint.",
                "isTopRated": true,
                "createdDate": "2016-01-19T20:47:04+00:00",
                "authors": [
                    {
                        "id": 4984,
                        "firstName": "Holman",
                        "lastName": "Mack"
                    },
                    {
                        "id": 54,
                        "firstName": "Karina",
                        "lastName": "Harmon"
                    },
                    {
                        "id": 5747,
                        "firstName": "Hodge",
                        "lastName": "Burch"
                    }
                ],
                "duration": 266
            },
            {
                "id": 6383,
                "title": "deserunt sunt ut voluptate",
                "description": "Incididunt mollit ipsum mollit occaecat eiusmod excepteur. Deserunt ea non et consectetur velit ex laboris esse officia adipisicing deserunt dolor culpa esse. Mollit quis dolore Lorem ex anim esse incididunt eu cupidatat ex ad sit eiusmod.",
                "isTopRated": true,
                "createdDate": "2016-07-06T11:32:16+00:00",
                "authors": [
                    {
                        "id": 654,
                        "firstName": "Antonia",
                        "lastName": "Mejia"
                    },
                    {
                        "id": 2033,
                        "firstName": "Harmon",
                        "lastName": "Douglas"
                    },
                    {
                        "id": 8611,
                        "firstName": "Reba",
                        "lastName": "Butler"
                    }
                ],
                "duration": 400
            },
            {
                "id": 5355,
                "title": "consectetur exercitation consequat amet",
                "description": "Irure pariatur aliquip cupidatat non minim enim mollit magna. Ipsum do laborum sit in consequat duis adipisicing occaecat do proident sint ut pariatur. Ex nulla quis aute ullamco proident minim exercitation eu cillum eiusmod non proident amet.",
                "isTopRated": false,
                "createdDate": "2016-07-14T02:00:21+00:00",
                "authors": [
                    {
                        "id": 1302,
                        "firstName": "Letitia",
                        "lastName": "Mclean"
                    },
                    {
                        "id": 9704,
                        "firstName": "Lara",
                        "lastName": "Mccarthy"
                    }
                ],
                "duration": 274
            },
            {
                "id": 5279,
                "title": "minim non adipisicing et",
                "description": "Non deserunt in Lorem occaecat magna ut. Minim culpa pariatur excepteur dolore aliquip nostrud quis est in non excepteur. Ea mollit occaecat adipisicing aliqua anim.",
                "isTopRated": false,
                "createdDate": "2017-03-14T01:05:21+00:00",
                "authors": [
                    {
                        "id": 5456,
                        "firstName": "Alexandria",
                        "lastName": "Navarro"
                    },
                    {
                        "id": 8971,
                        "firstName": "Baker",
                        "lastName": "Gaines"
                    },
                    {
                        "id": 7797,
                        "firstName": "Lowery",
                        "lastName": "Erickson"
                    },
                    {
                        "id": 6781,
                        "firstName": "Mcmahon",
                        "lastName": "Mosley"
                    }
                ],
                "duration": 118
            },
            {
                "id": 5780,
                "title": "occaecat consequat dolor enim",
                "description": "Occaecat nisi irure elit do irure qui minim magna nostrud duis consectetur. Consectetur nulla sint occaecat esse consequat veniam dolor ipsum quis cupidatat. Sunt anim dolor cillum culpa cillum mollit ullamco esse nisi enim occaecat culpa reprehenderit fugiat.",
                "isTopRated": true,
                "createdDate": "2017-12-05T17:44:36+00:00",
                "authors": [
                    {
                        "id": 4613,
                        "firstName": "Anita",
                        "lastName": "Brennan"
                    },
                    {
                        "id": 675,
                        "firstName": "Jeannine",
                        "lastName": "Conway"
                    },
                    {
                        "id": 4970,
                        "firstName": "Cohen",
                        "lastName": "Justice"
                    }
                ],
                "duration": 50
            },
            {
                "id": 3950,
                "title": "deserunt magna voluptate labore",
                "description": "Irure pariatur sint esse esse aute veniam exercitation anim mollit Lorem quis occaecat nostrud. Dolor elit pariatur veniam exercitation ex elit eu veniam Lorem dolor est voluptate est commodo. Aute ad non amet eiusmod adipisicing.",
                "isTopRated": false,
                "createdDate": "2016-11-28T19:19:36+00:00",
                "authors": [
                    {
                        "id": 6034,
                        "firstName": "Aida",
                        "lastName": "Shaw"
                    }
                ],
                "duration": 25
            },
            {
                "id": 1801,
                "title": "do in in esse",
                "description": "Adipisicing dolor esse laboris est culpa duis tempor do do voluptate. Adipisicing proident aute proident deserunt excepteur ad ullamco nisi. Pariatur pariatur deserunt reprehenderit mollit velit ullamco ipsum est nulla.",
                "isTopRated": false,
                "createdDate": "2016-09-24T00:28:47+00:00",
                "authors": [
                    {
                        "id": 9595,
                        "firstName": "Josefina",
                        "lastName": "Joyner"
                    },
                    {
                        "id": 7042,
                        "firstName": "Webb",
                        "lastName": "Lee"
                    },
                    {
                        "id": 6001,
                        "firstName": "Mccarthy",
                        "lastName": "Nunez"
                    },
                    {
                        "id": 3098,
                        "firstName": "Dale",
                        "lastName": "Hammond"
                    }
                ],
                "duration": 259
            },
            {
                "id": 1981,
                "title": "veniam excepteur eu aliqua",
                "description": "Nostrud incididunt proident proident amet deserunt ullamco Lorem id mollit qui cupidatat ut in. Qui aliqua commodo consequat minim cillum proident consequat fugiat eu ex. Laborum dolor nulla do cupidatat.",
                "isTopRated": false,
                "createdDate": "2017-08-13T16:49:32+00:00",
                "authors": [
                    {
                        "id": 8259,
                        "firstName": "Kane",
                        "lastName": "Gibson"
                    },
                    {
                        "id": 2526,
                        "firstName": "Megan",
                        "lastName": "Eaton"
                    },
                    {
                        "id": 1628,
                        "firstName": "Margret",
                        "lastName": "Barrera"
                    },
                    {
                        "id": 1196,
                        "firstName": "Sykes",
                        "lastName": "Jordan"
                    }
                ],
                "duration": 181
            },
            {
                "id": 5621,
                "title": "ex in consectetur fugiat",
                "description": "Lorem irure irure et enim nisi nulla occaecat. Magna pariatur enim reprehenderit dolore minim dolor. Deserunt non reprehenderit non fugiat fugiat qui do cupidatat ipsum eiusmod.",
                "isTopRated": true,
                "createdDate": "2016-04-26T18:28:30+00:00",
                "authors": [
                    {
                        "id": 5625,
                        "firstName": "Danielle",
                        "lastName": "Bonner"
                    },
                    {
                        "id": 1,
                        "firstName": "Mccullough",
                        "lastName": "Wagner"
                    },
                    {
                        "id": 9372,
                        "firstName": "Sweet",
                        "lastName": "Simmons"
                    },
                    {
                        "id": 1980,
                        "firstName": "Mayra",
                        "lastName": "Golden"
                    }
                ],
                "duration": 260
            },
            {
                "id": 4393,
                "title": "magna voluptate non non",
                "description": "Culpa culpa laborum ullamco laboris nisi quis in aute tempor cillum. Fugiat dolore deserunt labore dolore sunt nisi nisi Lorem consequat ullamco occaecat sit irure aliquip. Proident ullamco quis cupidatat aliquip sunt.",
                "isTopRated": false,
                "createdDate": "2016-05-07T08:31:38+00:00",
                "authors": [
                    {
                        "id": 9757,
                        "firstName": "Claudine",
                        "lastName": "Battle"
                    },
                    {
                        "id": 9200,
                        "firstName": "Cox",
                        "lastName": "Pate"
                    }
                ],
                "duration": 314
            },
            {
                "id": 9200,
                "title": "sunt sunt aliqua aliqua",
                "description": "Ipsum magna quis adipisicing culpa Lorem mollit in ea aliquip voluptate eu Lorem non ex. Incididunt deserunt sint officia amet officia Lorem elit enim veniam consequat dolore laboris ad reprehenderit. Laborum incididunt amet sunt magna ea ad aliquip deserunt.",
                "isTopRated": true,
                "createdDate": "2017-06-28T15:39:18+00:00",
                "authors": [
                    {
                        "id": 6104,
                        "firstName": "Bean",
                        "lastName": "Hewitt"
                    },
                    {
                        "id": 1131,
                        "firstName": "Mia",
                        "lastName": "Hill"
                    },
                    {
                        "id": 1628,
                        "firstName": "Pugh",
                        "lastName": "Padilla"
                    },
                    {
                        "id": 9982,
                        "firstName": "Fitzpatrick",
                        "lastName": "Michael"
                    }
                ],
                "duration": 393
            },
            {
                "id": 1897,
                "title": "ad eiusmod ipsum cupidatat",
                "description": "Tempor do culpa veniam ut. Occaecat amet reprehenderit sit deserunt minim anim nisi. Consequat excepteur aliquip non quis ad proident tempor ut consequat proident commodo adipisicing consectetur mollit.",
                "isTopRated": true,
                "createdDate": "2017-07-09T22:09:14+00:00",
                "authors": [
                    {
                        "id": 4322,
                        "firstName": "Parsons",
                        "lastName": "Nichols"
                    },
                    {
                        "id": 1325,
                        "firstName": "Malone",
                        "lastName": "Perkins"
                    },
                    {
                        "id": 7186,
                        "firstName": "Mccormick",
                        "lastName": "Maxwell"
                    }
                ],
                "duration": 40
            },
            {
                "id": 842,
                "title": "nisi pariatur aute nulla",
                "description": "Amet magna pariatur ea excepteur quis dolore. Sint elit Lorem Lorem exercitation exercitation. Proident excepteur esse tempor dolor officia sit et pariatur est.",
                "isTopRated": false,
                "createdDate": "2017-03-23T16:20:41+00:00",
                "authors": [
                    {
                        "id": 9893,
                        "firstName": "Hubbard",
                        "lastName": "Ortega"
                    },
                    {
                        "id": 562,
                        "firstName": "Genevieve",
                        "lastName": "Johnston"
                    },
                    {
                        "id": 4864,
                        "firstName": "Watson",
                        "lastName": "Wallace"
                    }
                ],
                "duration": 396
            },
            {
                "id": 6322,
                "title": "in irure incididunt irure",
                "description": "Incididunt labore voluptate aliquip laboris duis cillum proident occaecat quis elit deserunt. Anim minim dolore aliquip non amet. Laboris sit est nulla sit nostrud laboris velit.",
                "isTopRated": false,
                "createdDate": "2017-06-06T06:10:43+00:00",
                "authors": [
                    {
                        "id": 3588,
                        "firstName": "Parker",
                        "lastName": "Burton"
                    },
                    {
                        "id": 6988,
                        "firstName": "Gibson",
                        "lastName": "Carson"
                    },
                    {
                        "id": 3204,
                        "firstName": "Goldie",
                        "lastName": "Hughes"
                    },
                    {
                        "id": 9959,
                        "firstName": "Chandler",
                        "lastName": "Gentry"
                    }
                ],
                "duration": 143
            },
            {
                "id": 5652,
                "title": "irure sit labore esse",
                "description": "Cillum labore quis est sit duis sit voluptate. In incididunt in fugiat ad qui excepteur anim veniam. Adipisicing reprehenderit in aliquip culpa ullamco voluptate esse pariatur occaecat est eiusmod minim ipsum ullamco.",
                "isTopRated": true,
                "createdDate": "2017-05-14T12:48:11+00:00",
                "authors": [
                    {
                        "id": 1640,
                        "firstName": "Tameka",
                        "lastName": "Shaffer"
                    }
                ],
                "duration": 56
            },
            {
                "id": 5752,
                "title": "nisi in laborum minim",
                "description": "Enim Lorem consequat cillum magna in ea aute magna id nostrud. Ipsum eu labore eiusmod culpa. Ad aliqua aute amet sunt ut voluptate incididunt dolore amet tempor adipisicing.",
                "isTopRated": false,
                "createdDate": "2016-02-11T05:14:11+00:00",
                "authors": [
                    {
                        "id": 3958,
                        "firstName": "Olivia",
                        "lastName": "Bond"
                    },
                    {
                        "id": 9399,
                        "firstName": "Fulton",
                        "lastName": "Hale"
                    }
                ],
                "duration": 223
            },
            {
                "id": 3766,
                "title": "amet consequat aliquip do",
                "description": "Et aliqua exercitation labore consectetur consequat cupidatat ut commodo magna pariatur irure nisi consequat ipsum. Minim enim irure ipsum dolor officia dolore mollit proident consequat quis. Excepteur ipsum irure consequat adipisicing duis dolor ipsum.",
                "isTopRated": true,
                "createdDate": "2017-06-02T14:49:16+00:00",
                "authors": [
                    {
                        "id": 3940,
                        "firstName": "Sherry",
                        "lastName": "Dennis"
                    }
                ],
                "duration": 269
            },
            {
                "id": 6521,
                "title": "irure qui commodo laborum",
                "description": "In ad eiusmod quis fugiat. Sunt eu magna consequat velit ea aliquip aute minim. Sit Lorem pariatur veniam aute.",
                "isTopRated": false,
                "createdDate": "2017-07-10T18:03:28+00:00",
                "authors": [
                    {
                        "id": 8488,
                        "firstName": "Sasha",
                        "lastName": "Solis"
                    },
                    {
                        "id": 5756,
                        "firstName": "Madeline",
                        "lastName": "Whitehead"
                    }
                ],
                "duration": 218
            },
            {
                "id": 2401,
                "title": "voluptate ad aliqua ex",
                "description": "Proident irure deserunt mollit exercitation Lorem enim officia labore veniam dolore mollit nisi magna reprehenderit. Ut mollit amet eu ea id mollit cillum adipisicing quis est sunt reprehenderit. Consectetur ad labore duis nostrud nisi reprehenderit est.",
                "isTopRated": true,
                "createdDate": "2016-09-26T02:49:43+00:00",
                "authors": [
                    {
                        "id": 993,
                        "firstName": "Roth",
                        "lastName": "Camacho"
                    },
                    {
                        "id": 3558,
                        "firstName": "Teresa",
                        "lastName": "Weeks"
                    }
                ],
                "duration": 277
            }
        ];

        const users = [
            {
                "username": "User1",
                "password": "123",
                "token": "1237"
            }, {
                "username": "User2",
                "password": "123",
                "token": "1236"
            }, {
                "username": "User3",
                "password": "123",
                "token": "1235"
            },
            {
                "username": "username",
                "password": "password",
                "token": "1234"
            }
        ];


        return { courses, users };
    }
}
