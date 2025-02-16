const padlockElement = document.getElementById("paclock")

const getInitialData = (steps, range, refer) => {
    const start = refer + scrollY - (innerHeight*0.66)
    const end = start + range
    const unit = (end - start ) / steps
    return {start, end, steps, unit}
}

const padlockData = getInitialData(72,350, padlockElement.getBoundingClientRect().top)

const getCurrenStep = ({start, end, steps, unit}) => {
    let currentStep = 0
    //Si el usuario en el limite permitido del rango
    if(scrollY => start && scrollY <= end)
        currentStep = Math.ceil((scrollY - start) / unit)
    //Si el usuario esta abajo del inicio y el paso actual No es 0
    if(scrollY < start && currentStep !== 0)
        currentStep = 0
    //Si el usuario esta arriba del final y el paso actual no es el total no es el total 
    if(scrollY > end && currentStep < steps)
        currentStep = steps
    return currentStep
}

const handleOpenPadlockWithScroll = () =>{
    padlockElement.style.animationDelay = `-${getCurrenStep(padlockData)}s`
}

export const securityPanelScroll = () => {
    addEventListener("scroll", handleOpenPadlockWithScroll)
}