let r = 3

const I = a => a

r = I(3)
r

r = I(I)
r

const SELF = f => f(f)

r = SELF(I)
r

const PRI = a => _ => a

r = PRI(7)(11)
r

const ULT = _ => b => b

r = ULT(7)(11)
r

const TRO = f => a => b => f(b)(a)

r = TRO(ULT)(7)(11)
r

r = TRO(PRI)(6)(12)
r

const ULT2 = a => b => TRO(PRI)(a)(b)

r = ULT2(13)(20)
r


// boolean TRUE e FALSE
// TRUE ? <PRI> : ULT
// FALSE ? PRI : <ULT>

const T = PRI
const F = ULT

T.inspect = () => 'Verdadeiro (PRI)'
F.inspect = () => 'Falso (ULT)'

T
F

// NOT
const NOT = a => a(F)(T)

r = NOT(T)
r
r = NOT(F)
r
