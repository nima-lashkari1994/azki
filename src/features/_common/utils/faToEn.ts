const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰']
const arabicNumbers = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠']

export function toEnglish(value: string | number): string {
    if (!value) {
        return ''
    }

    let formatted = String(value)
    for (let i = 0, numbersLen = englishNumbers.length; i < numbersLen; i++) {
        formatted = String(formatted)
            .replace(new RegExp(persianNumbers[i], 'g'), englishNumbers[i])
            .replace(new RegExp(arabicNumbers[i], 'g'), englishNumbers[i])
    }

    return formatted
}