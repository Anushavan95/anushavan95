export default function Questions() {
    const styleOl = {
        width: "80%",
        color: "white",
        fontSize: "20px",
        margin: "0 auto",
        padding: "120px 0px"

    }

    return (
        <div className="quiz-section">

            <ol style={styleOl} className="list-quiz">
                <li>
                    Ի՞նչ գրաֆիկով են անցկացվում դասընթացները:
                    <p>Դասընթացները անցկացվում են շաբաթական 3 անգամ՝ 2 ժամ տևողությամբ:</p>
                </li>
                <li>
                    Պրակտիկայի հնարավորություն կա՞:
                    <p>Այո: Դասընթացի ավարտին, 1 ամիս անվճար պրակտիկա մեր ընկերությունում:</p>
                </li>
                <li>
                    Դասընթացի ավարտին աշխատանքի ընդունու՞մ եք:
                    <p>Այո: Դասընթացի ավարտին, լավագույն արդյունք ցուցաբերած ուսանողները կստանան
                        աշխատանքի առաջարկ մեր կամ գործընկեր կազմակերպության կողմից:</p>
                </li>
                <li>
                    Անգլերենի և մաթեմատիկայի գիտելիքները պարտադի՞ր են:
                    <p>Ոչ: Անգլերենի և մաթեմատիկայի գիտելիքները կօգնեն ավելի հեշտ ընկալել նոր
                        ինֆորմացիան և ավելի արագ կողմնորոշվել, բայց դրանց բացակայությունը պատճառ չե
                        չսովորելու համար:</p>
                </li>
                <li>
                    Համակարգիչ պե՞տք է բերել:
                    <p>Պարտադիր չէ: Մենք բոլոր ուսանողներին տրամադրում ենք անհատական համակարգիչներ:</p>
                </li>
                <li>
                    Քանի՞ տարեկանից կարող են մասնակցել դասընթացներին:
                    <p>Դասընթացներին կարող են մասնակցել՝ 15 տարեկանից սկսած:</p>
                </li>
                <li>
                    Տնային առաջադրանքներ լինու՞մ են:
                    <p>Այո: Յուրաքանչյուր պարապմունքի համար մշակված են տնային առաջադրանքներ:</p>
                </li>
                <li>
                    Իսկ եթե տնային առաջադրանքի ընթացքում հարցեր առաջանան՝ ու՞մ դիմեմ:
                    <p>Դասախոսը Ձեզ հետ կապի մեջ կլինի և կօգնի ցանկացած հարցում:</p>
                </li>
                <li>
                    Քանի՞ ուսանողից է բաղկացած խումբը:
                    <p>Խմբում առավելագույնը՝ 6 ուսանող:</p>
                </li>
            </ol>
        </div>
    )
}