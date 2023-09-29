export const GeneratePasswordForm = () => {

  return (
    <div className="bg-slate-600 px-6 py-8 rounded-md">
      <form>

        <div className="flex items-center gap-4 text-white mb-1">
          <input type="checkbox" />
          <label htmlFor="includeUpperCase">Include Uppercase</label>
        </div>

        <div className="flex items-center gap-4 text-white mb-1">
          <input type="checkbox" />
          <label htmlFor="includeLowercase">Include Lowercase</label>
        </div>

        <div className="flex items-center gap-4 text-white mb-1">
          <input type="checkbox" />
          <label htmlFor="includeNumber">Include Number</label>
        </div>

        <div className="flex items-center gap-4 text-white mb-3">
          <input type="checkbox" />
          <label htmlFor="includeSymbols">Include Symbols</label>
        </div>

        <div className="flex items-center mb-1">
          <input type="text" className="px-4 py-2 rounded-md w-full" />
        </div>

        <div></div>

        <div className="flex items-center">
          <button className="bg-slate-800 text-white text-base mt-4 px-4 py-2 rounded-lg border w-full transition-all hover:border-[#646cff] hover:bg-slate-900">Generate</button>
        </div>
      </form>
    </div>
  )
}
