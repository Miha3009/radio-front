import ReactMarkdown from 'react-markdown';

const About = () => {
    const text = `
# Erat primum

## Sive veniamque
    
Lorem markdownum cuius. Non nefas aquarum numen erat et est anguigenae veneno,
Iuno! Clara mediam dolore tangere, hos monte vigilans utiliter nulla adfusique!
Fuit pontus vapore thalamos de probro **mutua soporem**, ter cuncta fata; cura.
    
1. Adgreditur iuvenes caede modestos non
2. Quae cessit
3. Cucurri foedere cedit factum flammis nobiliumque marmorea
4. Vis proxima hinc
5. Parantem dies dolor luctus cum delia visu
6. Artes laudes protervis procerum fores ipse funesta
    
## Est atque in tepebat velut tecti abstemius
    
En aliquid mihi, origine dis vidit festum, gestasset, gladios fessa iniqua. Ullo
det, in si Sparte quaerunt, **ostendit ruinae**? Ossa quoque sine, Palladaque
visent **capit**, stipite fuisses subeunt, quas fasque nam! Latus tamen, nervis
**senili** quid pudorem dum haec a inposuere ferro Abantiades sum gemini cuius
sum fumavit, labores. Et Helicen color, tingui dixit ac nectare iactatam est
veni.
    
- Pectora nescia miserata armos Orithyia
- Tabe sanguine inferni
- Cladem qua apta
    
## Terram cum superis carmine luctibus illi
    
Messes hortanda caput venatibus misit: concipit querellae! Sui est, ore pugnatum
Boreae Bacchumque movere vereri, non descendit eras, tam captavit
[habenas](http://qui.io/annumrura).
    
## Prope sanguine sceleris capillos mediocris latices
    
Inde silices stamina [audierat
iudicis](http://femineis-imagine.com/telamon.html). Cura novas esse mare ius
tendebat, vellem, iaculatricemque inquit saepe vultum. Et setae quoque Actorides
expertus adpellavere ossibus nocens. Tumulati leto quis et opaca omen mentis
mihi.`

    return (
        <div className="bg-light rounded p-4 my-3">
            <ReactMarkdown children={text} />
        </div>
    );
}

export default About;
