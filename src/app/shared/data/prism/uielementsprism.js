export const alerts = `<div className="alert alert-warning  fade show flex" role="alert" id="dismiss-alert1">
<div className="sm:flex-shrink-0">
    <strong>Holy guacamole!</strong> You should check in on some of those fields
    below.
</div>
<div className="ms-auto">
    <div className="mx-1 my-1">
        <button type="button"
            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 
            focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
            data-hs-remove-element="#dismiss-alert1">
            <span className="sr-only">Dismiss</span>
            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path
      d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 
      0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 
      0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899
      0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782
      0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 
      1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357
      15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851
      13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 
      15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 
      15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 
      1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232
      14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 
      7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 
      1.16047 0.724562 0.887983 0.92524 0.687069Z"
      fill="currentColor" />
            </svg>
        </button>
    </div>
</div>
</div>`

export const alerts1 = `<div className="bg-gray-50 border border-gray-200 dark:bg-light
 dark:border-defaultborder/10 alert mb-0"role="alert">
 <divclassName="flex">
 <divclassName="sm:flex-shrink-0">
 <svg className="h-4 w-4 text-gray-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" 
 height="16" fill="currentColor" viewBox="0 0 16 16">
 <pathd="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 
 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703
  0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 
  2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg>
  </div className="">
  <div className="flex-1 md:flex md:justify-between ms-2">
  <p className="text-sm dark:text-defaulttextcolor/70">
  A new software update is available. See whats new in version 3.0.7<p>
  <p className="text-sm mt-3 md:mt-0 md:ms-6">
  <a className="dark:text-defaulttextcolor/70 hover:text-gray-500 
  font-medium whitespace-nowrap"href="#;">Details</a>
  <p className="">
  <div>
  </div>
  </div>`

export const Defaultalerts = `{defaultalerts.map((idx) => 
    (&lt;div className={a&#768;alert alert-&#36;{idx.color}a&#769;} role="alert" key={Math.random()}>
    {a&#768; A simple &#36;{idx.text} alert—check it out!a&#769;}&lt;/div>))}`

export const Linkalerts = `{defaultalerts.map((idx) => 
    (<div className={a&#768;alert alert-&#36;{idx.color}a&#769;} role="alert" key={Math.random()}>
     {a&#768;A simple &#36;{idx.text} alert witha&#769;} 
     <Link href="#" className="alert-link">an example link</Link>
     .Give it a click if you like.</div>))}`

export const Solidcoloralerts = `{solidalert.map((idx) => 
    (<div className={a&#768;alert alert-solid-&#36;{idx.color} alert-dismissible fade show flexa&#769;} 
        role="alert" key={Math.random()} id="dismiss-alert2"><div className="sm:flex-shrink-0">
        {a&#768; A simple solid &#36;{idx.color} alert—check it out!a&#769;}</div>
        <div className="ms-auto"><div className="mx-1 my-1"> 
        <button type="button" className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0
         focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" data-hs-remove-element="#dismiss-alert2">
         <span className="sr-only">Dismiss</span>
         <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" 
         aria-hidden="true"> <path] d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219
          2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 
          0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983
           0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 
           1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 
           13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 
           15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894
            15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 
            14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524
             2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
              fill="currentColor" /></svg></button>
              </div>
              </div>
              </div>))}`

export const outlinealerts = `{solidalert1.map((idx) =>
     ( <div className={a&#768;alert alert-outline-&#36;{idx.color} alert-dismissible fade show flexa&#769;} 
        role="alert" key={Math.random()id="dismiss-alert10"><div className="sm:flex-shrink-0">
        {a&#768;  A simple outline &#36;{idx.color} alert—check it out!a&#769;}</div>
        <div className="ms-auto">
        <div className="mx-1 my-1">
<button type="button" className="inline-flex bg-teal-50 rounded-sm
 text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0
focus:ring-offset-teal-50 focus:ring-teal-600" 
data-hs-remove-element="#dismiss-alert10">
<span className="sr-only">Dismiss</span>
<svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" 
fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 
0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 
6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 
0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 
0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 
0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 
1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 
15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 
2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 
14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 
15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 
9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 
15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 
14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 
2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562
 0.887983 0.92524 0.687069Z" fill="currentColor" /></svg>
 </button>
 </div>
 </div>
 </div>
 ))}`

export const Differentshadows = `{shadows.map((idx) => 
( <div className={a&#768;alert alert-solid-&#36;{idx.color} 
alert-dismissible fade show flexa&#769;} role="alert"
 key={Math.random()}id="dismiss-alert18">
 <div className="sm:flex-shrink-0">
 {a&#768;A simple solid &#36;{idx.color} 
 alert with small shadow—check it out!a&#769;}</div>
 <div className="ms-auto">
 <div className="mx-1 my-1">
 <button type="button" 
 className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0
  focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
   data-hs-remove-element="#dismiss-alert18">
<span className="sr-only">Dismiss</span>
<svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" 
   fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
   <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 
   1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 
   0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748
13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 
0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 
14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 
0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859
 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809
1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851
2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 
14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 
15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 
15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.
23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449
 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 
 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562
  2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 
  0.92524 0.687069Z" fill="currentColor" /></svg>
  </button>
  </div>
  </div>
  </div>))}`

export const Differentalerts = `{shadows.map((idx) => 
(<div className={a&#768;alert alert-&#36;{idx.color} shadow-sma&#769;}
 key={Math.random()}>{a&#768;A simple &#36;{idx.color} 
 alert with smallshadow—check it out!a&#769;}</div>))}`

export const Roundedalerts = `{roundedalerts.map((idx) 
=> (<div className={a&#768;alert alert-solid-&#36;{idx.color}
 !rounded-full alert-dismissible fade show flexa&#769;} 
 key={Math.random()}role="alert" id="dismiss-alert24">
 <div className="sm:flex-shrink-0">
 {a&#768;A simple solid rounded &#36;{idx.color} 
 alert—check it out!a&#769;}</div>
 <div className="ms-auto">
 <div className="mx-1 my-1">
 <button type="button" className="inline-flex bg-teal-50 
 rounded-sm text-teal-500 focus:outline-none focus:ring-0
  focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
 data-hs-remove-element="#dismiss-alert24">
 <span className="sr-only">Dismiss</span>
 <svg className="h-3 w-3" width="16" height="16"
 viewBox="0 0 16 16" fill="none" 
xmlns="http://www.w3.org/2000/svg" 
aria-hidden="true">
<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 
1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894
 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748
13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 
0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 
14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983
0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 
1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 
1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 
2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 
13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 
14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.
3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 
9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594
15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807
 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 
 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 
 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562
0.887983 0.92524 0.687069Z" fill="currentColor" />
</svg>
</button>
</div>
</div>
</div>))}`

export const outlinerounded = `{roundedalerts.map((idx) => 
(<div className={a&#768;alert alert-outline-&#36;{idx.color} 
!rounded-full alert-dismissible fade show flexa&#769;} 
key={Math.random()}role="alert" id="dismiss-alert28">
<div className="sm:flex-shrink-0">
{a&#768;A simple outline rounded &#36;{idx.color} alert—check it out!a&#769;}
</div>
<div className="ms-auto">
<div className="mx-1 my-1">
<button type="button"  className="inline-flex bg-teal-50 rounded-sm
 text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 
 focus:ring-offset-teal-50 focus:ring-teal-600"
  data-hs-remove-element="#dismiss-alert28">
  <span className="sr-only">Dismiss</span>
<svg className="h-3 w-3" width="16" height="16" 
viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
 aria-hidden="true">
<path  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 
0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 
6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 
0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 
0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 
0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 
1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 
1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 
2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 
13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 
14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 
15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 
9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 
15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 
14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 
13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 
2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 
0.887983 0.92524 0.687069Z" fill="currentColor" /> </svg>
</button>
</div>
</div>
</div>))}`

export const roundeddefault = `{roundedalerts.map((idx) => 
(<div className={a&#768;alert alert-&#36;{idx.color} !rounded-full
 alert-dismissible fade show flexa&#769;}
  key={Math.random()} role="alert" id="dismiss-alert32">
  <div className="sm:flex-shrink-0">
  {a&#768;A simple solid rounded &#36;{idx.color} 
  alert—check it out!a&#769;}</div>
  <div className="ms-auto">
  <div className="mx-1 my-1">
  <button type="button" 
  className="inline-flex bg-teal-50 rounded-sm text-teal-500
   focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50
    focus:ring-teal-600"  data-hs-remove-element="#dismiss-alert32">
<span className="sr-only">Dismiss</span>
<svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" 
 fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
 <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 
 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 
 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 
 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 
 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 
 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 
 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 
 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 
 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 
 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 
 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 
 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663
15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 
15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 
14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 
2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 
1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
</svg>
</button>
</div>
</div>
</div>))}`

export const custombuttons = `{roundedalerts.map((idx) => 
    (<div className={a&#768;alert alert-&#36;{idx.color} 
!rounded-full alert-dismissible fade showa&#769;} 
key={Math.random()} id="dismiss-alert36">{a&#768;A simple rounded &#36;{idx.color}
 alert—check it out!a&#769;}
 <button type="button"  
 className="inline-flex bg-teal-50 ltr:float-right rtl:float-left
  text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 
focus:ring-offset-teal-50 focus:ring-teal-600" 
data-hs-remove-element="#dismiss-alert36">
<span className="sr-only">Dismiss</span>
<svg className="h-3 w-3" width="16" height="16" 
viewBox="0 0 16 16" fill="none" 
xmlns="http://www.w3.org/2000/svg" 
aria-hidden="true">
<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 
0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 
0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 
0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321
 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 
 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 
 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 
 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 
 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 
 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 
 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 
 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" 
 fill="currentColor" />
 </svg>
 </button>
 </div>))}`

export const Iconalerts = `{iconalerts.map((idx) =>
(<div className={a&#768;alert alert-&#36;{idx.color} 
flex items-centera&#769;} role="alert" key={Math.random()}>
{idx.icon}<div> {a&#768; An example &#36;{idx.color} alert  
with an icona&#769;}
</div>
</div>))}`

export const Customizedalerts = `<div className="alert alert-primary 
alert-dismissible dark:!bg-bodybg fade show custom-alert-icon shadow-sm
 flex items-center" role="alert" id="dismiss-alert40"><div>
<svg className="svg-primary me-1" xmlns="http://www.w3.org/2000/svg" 
height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
<path d="M0 0h24v24H0z" fill="none" />
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12
 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
</svg>
</div>
<div>A customized primary alert with an icon</div>
<div className="ms-auto">
<div className="mx-1 my-1">
<button type="button" className="inline-flex bg-teal-50 rounded-sm 
text-teal-500 focus:outline-none
 focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
 data-hs-remove-element="#dismiss-alert40">
 <span className="sr-only">Dismiss</span>
 <svg className="h-3 w-3" width="16" height="16" 
 viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" 
 aria-hidden="true">
 <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 
 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 
 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 
 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 
 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 
 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 
 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 
 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 
 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 
 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 
 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 
 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 
 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 
 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 
 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 
 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 
 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
 </svg>
 </button>
 </div>
 </div>
 </div>`

export const Imagealerts = `<div className="alert alert-img alert-primary 
alert-dismissible fase show !rounded-full flex-wrap relative" 
role="alert" id="dismiss-alert44">
<div className="avatar avatar-sm me-3 avatar-rounded">
<img src="../../../assets/images/faces/3.jpg" alt="img" />
</div><div>A simple primary alert with image—check it out!</div>
<button type="button" className="m-2 p-3 absolute end-0 top-0 
inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none
 focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 
 focus:ring-teal-600" data-hs-remove-element="#dismiss-alert44">
 <span className="sr-only">Dismiss</span>
 <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
  fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209
0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 
6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 
0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 
0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 
0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 
1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297
15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851
2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 
15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 
15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 
13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 
15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 
15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 
14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 
2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 
1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
</svg>
</button>
</div>`

export const Alertimages = `<div className="alert alert-img alert-primary
 alert-dismissible fase show flex-wrap relative" role="alert" 
 id="dismiss-alert51"><div className="avatar avatar-xs me-3">
 <img src="../../../assets/images/faces/3.jpg" alt="img" /></div>
 <div>A simple primary alert with image—check it out!</div>
 <button type="button" className="m-2 p-3 absolute end-0 top-0  
 inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none 
 focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
 data-hs-remove-element="#dismiss-alert51"><span className="sr-only">Dismiss
 </span>
 <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" 
 fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
 <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 
 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 
 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 
 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 
 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 
 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 
 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 
 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 
 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 
 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 
 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 
 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 
 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 
 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 
 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 
 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816
  1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
  </svg>
  </button>
  </div>`

export const additionaldata = `<div className="xxl:col-span-6 col-span-12">
<div className="alert alert-primary overflow-hidden !p-0" role="alert" 
id="dismiss-alert65">
<div className="p-4 bg-primary text-white flex justify-between">
<h6 className="aletr-heading mb-0 text-[1rem]">Thank you for reporting this.
</h6><button type="button" className="inline-flex bg-teal-50 rounded-sm text-teal-500 
focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 
focus:ring-teal-600" data-hs-remove-element="#dismiss-alert65">
<span className="sr-only">Dismiss</span>
<svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none" 
xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 
0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 
0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 
0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 
0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 
1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248
 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 
 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 
 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 
 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 
 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 
 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 
 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562
 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 
 0.92524 0.687069Z" fill="currentColor" />
 </svg>
 </button>
 </div>
 <div className="p-3">
 <p className="mb-0">We appreciate you to let us know the bug in the template 
 and for warning us about future consequences <Link href="#" className="font-semibold
  underline text-defaulttextcolor">Visit for support for queries ?
  </Link>
  </p>
  </div>
  </div>
  </div>`


// Badges

export const badges1 = `{badges.map((idx) => 
(<span className={a&#768;badge bg-&#36;{idx.color}a&#769;}
 key={Math.random()}>{idx.class}</span>))}`

export const badges2 = `{badges.map((idx) =>
 (<span className={a&#768;badge !rounded-full bg-&#36;
{idx.color}a&#769;} key={Math.random()}>{idx.class}
</span>))}`

export const badges3 = `<div className="box-body flex flex-wrap gap-2">
{lightbadges.map((idx) => 
(<span className={a&#768;badge bg-&#36;{idx.color}a&#769;}
 key={Math.random()}>{idx.class}</span>))}</div>`

export const badges4 = `<div className="box-body flex flex-wrap gap-2">
{lightbadges.map((idx) => (<span
 className={a&#768;badge !rounded-full bg-&#36;{idx.color}a&#769;}
  key={Math.random()}>{idx.class}</span>))}
</div>`

export const badges5 = `<div className="box-body flex flex-wrap gap-2">
{gradientbadge.map((idx)=>(<span 
className={a&#768;badge bg-&#36;{idx.color}-gradienta&#769;} 
key={Math.random()}>{idx.class}</span>))}
</div>`

export const badges6 = `<div className="box-body flex flex-wrap gap-2">
{gradientbadge.map((idx)=>(<span className={a&#768;badge rounded-full
bg-&#36;{idx.color}-gradienta&#769;} key={Math.random()}>
{idx.class}</span>))}</div>`

export const badges7 = `<div className="box-body flex flex-wrap gap-2">
{outlinebadges.map((idx) => (
<span className={a&#768;badge bg-outline-&#36;{idx.color}a&#769;}
key={Math.random()}>{idx.class}</span>))}</div>`

export const badges8 = `<div className="box-body flex flex-wrap gap-2">
{outlinebadges.map((idx) => (
<span className={a&#768;badge !rounded-full bg-outline-&#36;
{idx.color}a&#769;} key={Math.random()}>{idx.class}</span>))}
</div>`

export const badges9 = `<div className="box-body flex flex-wrap gap-2">
<button type="button" className="ti-btn bg-primary text-white my-1 me-2">
 Notifications <span className="badge ms-2 bg-secondary">4</span></button>
<button type="button" className="ti-btn bg-secondary text-white my-1 me-2"> 
Notifications <span className="badge ms-2 bg-primary">7</span></button>
<button type="button" className="ti-btn bg-success text-white my-1 me-2"> 
Notifications <span className="badge ms-2 bg-danger">12</span></button>
<button type="button" className="ti-btn bg-info text-white my-1 me-2"> 
Notifications <span className="badge ms-2 bg-warning">32</span>
</button>
</div>`

export const badges10 = `<div className="box-body flex flex-wrap gap-2">
<button type="button" className="ti-btn ti-btn-outline-primary my-1 me-2">
Notifications
<span className="badge bg-primary ms-2 text-white">4</span>
</button>
<button type="button" className="ti-btn ti-btn-outline-secondary my-1 me-2">
 Notifications <span className="badge bg-secondary ms-2 text-white">7</span>
 </button>
 <button type="button" className="ti-btn ti-btn-outline-success my-1 me-2">
 Notifications 
 <span className="badge bg-success ms-2 text-white">12</span>
 </button>
<button type="button" className="ti-btn ti-btn-outline-info my-1 me-2"> 
Notifications 
<span className="badge bg-info ms-2 text-white">32</span>
</button>
</div>`

export const badges11 = `<div className="box-body">
<h1 className="text-[2.5rem]">Example heading 
<span className="badge bg-primary text-white">New</span>
</h1><h2 className="text-[2rem]">
Example heading
<span className="badge bg-primary text-white">New</span>
</h2><h3 className="text-[1.75rem]">Example heading 
<span className="badge bg-primary text-white">New</span></h3>
<h4 className="text-[1.5rem]">Example heading 
<span className="badge bg-primary text-white">New</span>
</h4><h5 className="text-[1.25rem]">Example heading 
<span className="badge bg-primary text-white">New</span>
</h5><h6 className="text-[1rem]">Example heading 
<span className="badge bg-primary text-white">New</span>
</h6>
</div>`

export const badges12 = `<div className="box-body flex flex-wrap gap-4">
<button type="button" className="ti-btn bg-primary text-white relative">
Inbox
<spanclassName="absolute -top-2 start-[60%] translate-middle 
 badge !rounded-full bg-danger">99+<span className="hidden">
 unread messages</span></span></button>
 <button type="button" className="ti-btn bg-secondary text-white relative">
Profile<spanclassName="absolute -top-2 start-[80%] translate-middle 
p-2 bg-success border border-light !rounded-full">
<span className="hidden">New alerts</span></span>
</button><span className="avatar relative">
<img src="../../../assets/images/faces/2.jpg" alt="img" 
className="!rounded-md" />
<spanclassName="absolute -top-2 start-[80%] translate-middle 
p-1 bg-success border border-light !rounded-full">
<span className="hidden">New alerts</span>
</span>
</span>
<span className="avatar avatar-rounded relative">
<img src="../../../assets/images/faces/15.jpg" alt="img" />
<spanclassName="absolute -top-2 start-[80%] translate-middle 
p-1 bg-success border border-light !rounded-full">
<span className="hidden">New alerts</span>
</span>
</span>
<span className="avatar avatar-rounded relative">
<img src="../../../assets/images/faces/10.jpg" alt="img" />
<span className="absolute -top-2 start-[60%] translate-middle 
badge bg-secondary !rounded-full shadow-lg text-white">1000+
<span className="hidden">New alerts</span>
</span>
</span>
</div>`

export const badges13 = `<div className="box-body">
<div className="flex items-center gap-5 flex-wrap">
<div>
<span className="badge bg-outline-secondary !font-semibold 
!text-[.9375rem] inline-flex items-center">
<i className="ti ti-flame me-1"></i>
Hot</span>
</div>
<div>
<span className="relative">
<svg className="fill-textmuted dark:fill-textmuted/50 w-8 h-8 
text-[2rem]" xmlns="http://www.w3.org/2000/svg" height="24px" 
viewBox="0 0 24 24" width="24px" fill="#000000">
<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 
2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5
 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
 </path>
 </svg>
 <span className="badge !rounded-full bg-success text-white absolute
  -end-2 top-0">14</span>
</span>
</div>
<div>
<span className="badge border dark:border-light bg-light
 text-defaulttextcolor font-semibold font-[.7rem]">
 <i className="fe fe-eye me-2 inline-block"></i>
 13.2k</span>
 </div>
 <div>
 <span className="text-badge relative">
 <span className="text text-lg">Inbox</span>
 <span className="badge !rounded-full bg-success 
 text-white">32</span>
 </span>
 </div>
 </div>
 </div>`

//Buttons

export const buttons1 = `<div className="ti-btn-list space-x-2 rtl:space-x-reverse">
{Defaultbutton.map((idx)=>(<button type="button" className={a&#768;ti-btn ti-btn-&#36;
    {idx.color} ti-btn-wavea&#769;} key={Math.random()}>{idx.class}</button>))}
<button type="button" className="ti-btn ti-btn-link ti-btn-wave">Link
</button>
</div>`

export const buttons2 = `<div className="ti-btn-list space-x-2 rtl:space-x-reverse">
{Defaultbutton.map((idx)=>(<button type="button" 
className={a&#768;ti-btn ti-btn-&#36;{idx.color} 
!rounded-full ti-btn-wavea&#769;} key={Math.random()}>
{idx.class}</button>))}<button type="button"
 className="ti-btn ti-btn-link ti-btn-wave">Link
</button>
</div>`

export const buttons3 = `<div className="ti-btn-list space-x-2 rtl:space-x-reverse">
{Lightbuttons.map((idx)=>(<button type="button" 
className={a&#768;ti-btn ti-btn-&#36;{idx.color}
ti-btn-wavea&#769;} key={Math.random()}>{idx.class}
</button>))}</div>`

export const buttons4 = `<div className="ti-btn-list space-x-2 
rtl:space-x-reverse">{Lightbuttons.map((idx)=>( <button type="button" 
className={a&#768;ti-btn ti-btn-&#36;{idx.color} !rounded-full 
ti-btn-wavea&#769;} key={Math.random()}>
{idx.class}</button>))}
</div>`

export const buttons5 = `<div className="ti-btn-list space-x-2 
rtl:space-x-reverse">{outlinebuttons.map((idx)=>
(}<button type="button" className={a&#768;ti-btn 
ti-btn-outline-&#36;{idx.color} ti-btn-wavea&#769;} 
key={Math.random()}>{idx.class}</button>))}
</div>`

export const buttons6 = `<div className="ti-btn-list space-x-2 
rtl:space-x-reverse">{outlinebuttons.map((idx)=>(
<button type="button" className={a&#768;ti-btn 
ti-btn-outline-&#36;{idx.color} !rounded-full 
ti-btn-wavea&#769;} key={Math.random()}>{idx.class}
</button>))}
</div>`

export const buttons7 = `<div className="ti-btn-list space-x-2 
rtl:space-x-reverse">{gradientbuttons.map((idx)=>(
<button type="button" className={a&#768;ti-btn 
ti-btn-&#36;{idx.color}-gradient ti-btn-wavea&#769;} 
key={Math.random()}>{idx.class}</button>))}</div>`

export const buttons8 = `<div 
className="ti-btn-list space-x-2 rtl:space-x-reverse">
{gradientbuttons.map((idx)=>(
<button type="button" className={a&#768;ti-btn ti-btn-&#36;
{idx.color}-gradient !rounded-full ti-btn-wavea&#769;}
key={Math.random()}>{idx.class}</button>))}</div>`

export const buttons9 = `<div className="ti-btn-list 
space-x-2 rtl:space-x-reverse">
{gradientbuttons.map((idx)=>(<button type="button" 
className={a&#768;ti-btn ti-btn-ghost-&#36;{idx.color} 
ti-btn-wavea&#769;} key={Math.random()}>{idx.class}</button>))}
</div>`

export const buttons10 = `<div 
className="ti-btn-list space-x-2 rtl:space-x-reverse">
{gradientbuttons.map((idx)=>(<button type="button" 
className={a&#768;ti-btn ti-btn-ghost-&#36;{idx.color} 
!rounded-full ti-btn-wavea&#769;} key={Math.random()}>
{idx.class}</button>))}
</div>`

export const buttons11 = `<div className="ti-btn-list space-x-2
 rtl:space-x-reverse">
 <Link className="ti-btn ti-btn-primary-full ti-btn-wave" href="#">
 Link</Link><button className="ti-btn ti-btn-secondary-full 
 ti-btn-wave" type="submit">Button</button>
<input className="ti-btn ti-btn-info-full" type="button"
 value="Input" />
<input className="ti-btn ti-btn-warning-full" type="button" 
value="Submit" /><input className="ti-btn ti-btn-success-full" 
type="button" value="Reset" />
</div>`

export const buttons12 = `<div className="ti-btn-list flex">
<div className="mb-4">
<button type="button" className="ti-btn ti-btn-primary-full 
ti-btn-disabled">Primary button</button><button type="button"
 className="ti-btn ti-btn-secondary-full ti-btn-disabled">
 Button</button>
 <button type="button" 
 className="ti-btn ti-btn-outline-primary ti-btn-disabled">
 Primary button</button><button type="button" 
 className="ti-btn ti-btn-outline-secondary ti-btn-disabled">
 Button</button>
 </div>
 <div>
 <Link href="#" className="ti-btn ti-btn-primary ti-btn-disabled" 
 aria-disabled="true">Primary link</Link><Link href="#"
  className="ti-btn ti-btn-secondary ti-btn-disabled" 
  aria-disabled="true">
Link
</Link>
</div>
</div>`

export const buttons13 = `<div className="ti-btn-list md:flex flex-wrap">
<button type="button" 
className="ti-btn ti-btn-primary-full ti-btn-loader m-2">
<span className="me-2">Loading</span>
<span className="loading">
<i className="ri-loader-2-fill text-[1rem] animate-spin">
</i></span>
</button>
<button type="button" className="ti-btn ti-btn-outline-secondary
 ti-btn-loader m-2"><span className="me-2">Loading</span>
 <span className="loading">
 <i className="ri-loader-2-fill text-[1rem] animate-spin">
 </i>
 </span>
 </button>
 <button type="button" className="ti-btn bg-info/10 
 text-info ti-btn-loader m-2">
 <span className="me-2">
 Loading</span><span className="loading">
 <i className="ri-loader-4-line text-[1rem] 
 animate-spin"></i></span></button>
 <button type="button" className="ti-btn bg-warning/10 
 text-warning ti-btn-loader m-2">
 <span className="me-2">Loading</span>
 <span className="loading">
 <i className="ri-loader-5-line text-[1rem]
  animate-spin"></i></span>
  </button>
  <button type="button" 
  className="ti-btn ti-btn-success-full ti-btn-loader 
  ti-btn-disabled m-2">
  <span className="me-2">
  Disabled</span>
  <span className="loading">
  <i className="ri-refresh-line text-[1rem]
   animate-spin"></i></span>
   </button>
   </div>`

export const buttons14 = `<div className="ti-btn-list md:flex block">
<div className="md:mb-0 mb-2">
<button type="button" aria-label="button"
 className="ti-btn ti-btn-icon ti-btn-primary-full ti-btn-wave"> 
 <i className="ri-bank-fill"></i></button>
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon ti-btn-info-full ti-btn-wave">
 <i className="ri-medal-line"></i></button>
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon ti-btn-danger-full ti-btn-wave">
 <i className="ri-archive-line"></i></button>
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon ti-btn-warning-full ti-btn-wave me-5">
 <i className="ri-calendar-2-line"></i></button>
 </div>
 <div className="md:mb-0 mb-2">
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon bg-primary/10 text-primary 
 !border hover:bg-primary hover:text-white !rounded-full 
 ti-btn-wave"><i className="ri-home-smile-line"></i></button>
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon bg-secondary/10 text-secondary 
 hover:bg-secondary hover:text-white !rounded-full ti-btn-wave">
 <i className="ri-delete-bin-line"></i></button>
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon bg-success/10 text-success hover:bg-success
  hover:text-white !rounded-full ti-btn-wave">
<i className="ri-notification-3-line"></i></button>
<button type="button" aria-label="button" 
className="ti-btn ti-btn-icon bg-danger/10 text-danger 
hover:bg-danger hover:text-white !rounded-full ti-btn-wave me-5">
<i className="ri-chat-settings-line"></i></button>
</div>
<div className="">
<button type="button" aria-label="button" 
className="ti-btn ti-btn-icon ti-btn-outline-primary 
!rounded-full ti-btn-wave">
<i className="ri-phone-line">
</i></button><button type="button" aria-label="button"
 className="ti-btn ti-btn-icon ti-btn-outline-teal 
 !border-teal !text-teal !rounded-full ti-btn-wave">
 <i className="ri-customer-service-2-line"></i></button>
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon ti-btn-outline-success 
 !rounded-full ti-btn-wave"><i className="ri-live-line"></i>
 </button><button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon ti-btn-outline-secondary 
 !rounded-full ti-btn-wave"><i className="ri-save-line">
 </i>
 </button>
 </div>
 </div>`

export const buttons15 = `<div className="ti-btn-list space-x-2 rtl:space-x-reverse">
<button type="button" aria-label="button" 
className="ti-btn ti-btn-icon ti-btn-facebook ti-btn-wave">
<i className="ri-facebook-line"></i>
</button>
<button type="button" aria-label="button" className="ti-btn ti-btn-icon
 ti-btn-twitter ti-btn-wave">
 <i className="ri-twitter-line"></i>
 </button>
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon ti-btn-instagram ti-btn-wave">
 <i className="ri-instagram-line"></i</button>
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon ti-btn-github 
 ti-btn-wave"><i className="ri-github-line"></i>
 </button>
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon ti-btn-youtube ti-btn-wave">
 <i className="ri-youtube-line"></i></button>
 <button type="button" aria-label="button" 
 className="ti-btn ti-btn-icon ti-btn-google ti-btn-wave">
 <i className="ri-google-line"></i>
 </button>
 </div>`

export const buttons16 = `<div className="ti-btn-list space-x-2 r
tl:space-x-reverse">
<button type="button" className="ti-btn ti-btn-primary-full 
!py-1 !px-2 ti-btn-wave">Smallbutton
</button>
<button type="button" 
className="ti-btn ti-btn-secondary-full ti-btn-wave">
Default<button type="button" 
className="ti-btn ti-btn-success-full ti-btn-lg ti-btn-wave">
Large button
</button>
</div>`

export const buttons17 = `<div className="ti-btn-list space-x-2 rtl:space-x-reverse">
<button type="button" className="ti-btn ti-btn-primary-full ti-btn-w-xs ti-btn-wave">
XS</button><button type="button" className="ti-btn ti-btn-secondary-full ti-btn-w-sm
 ti-btn-wave">SM</button><button type="button" className="ti-btn ti-btn-warning-full 
 ti-btn-w-md ti-btn-wave">MD</button><button type="button" 
 className="ti-btn ti-btn-info-full ti-btn-w-lg ti-btn-wave">LG</button>
 </div>`

export const buttons18 = `<div className="ti-btn-list flex">
<div className="me-[3rem]">
<button type="button" className="ti-btn ti-btn-primary-full shadow-sm ti-btn-wave">
Button</button><button type="button" className="ti-btn ti-btn-primary-full shadow
 ti-btn-wave">Button</button><button type="button" 
 className="ti-btn ti-btn-primary-full shadow-lg ti-btn-wave">Button</button>
 </div>
 <div>
 <button type="button" 
 className="ti-btn ti-btn-secondary-full !py-1 !px-2 shadow-sm ti-btn-wave">Button
 </button>
 <button type="button" className="ti-btn ti-btn-info-full shadow ti-btn-wave">
 Button</button>
 <button type="button" className="ti-btn ti-btn-lg ti-btn-success-full 
 shadow-lg ti-btn-wave">Button
 </button>
 </div>
 </div>`

export const buttons19 = `<div className="ti-btn-list space-x-2 rtl:space-x-reverse">
<button type="button" className="ti-btn ti-btn-primary-full shadow-primary ti-btn-wave">
Button</button>
<button type="button" className="ti-btn ti-btn-secondary-full shadow-secondary ti-btn-wave">
Button</button>
<button type="button" className="ti-btn ti-btn-success-full shadow-success ti-btn-wave">Button
</button>
<button type="button" className="ti-btn ti-btn-info-full shadow-info ti-btn-wave">Button
</button>
<button type="button" className="ti-btn ti-btn-warning-full shadow-warning ti-btn-wave">
Button</button>
<button type="button" className="ti-btn ti-btn-danger-full shadow-danger ti-btn-wave">Button
</button>
<button type="button" className="ti-btn ti-btn-purple-full shadow-purple ti-btn-wave">Button
</button>
<button type="button" className="ti-btn ti-btn-orange-full shadow-orange ti-btn-wave">Button
</button>
</div>`

export const buttons20 = `<div className="ti-btn-list space-x-2 rtl:space-x-reverse">
<button type="button" className="ti-btn ti-btn-primary-full label-ti-btn">
<i className="ri-chat-smile-line label-ti-btn-icon  me-2"></i>Primary</button>
<button type="button" className="ti-btn ti-btn-secondary-full label-ti-btn">
<i className="ri-settings-4-line label-ti-btn-icon me-2"></i>Secondary</button>
<button type="button" className="ti-btn ti-btn-warning-full label-ti-btn 
!rounded-full"><i className="ri-spam-2-line label-ti-btn-icon me-2 !rounded-full">
</i>Warning
</button>
<button type="button" className="ti-btn ti-btn-info-full label-ti-btn !rounded-full">
<i className="ri-phone-line label-ti-btn-icon me-2 !rounded-full"></i>Info</button>
<button type="button" className="ti-btn ti-btn-success-full label-ti-btn label-end">
<i className="ri-thumb-up-line label-ti-btn-icon ms-2"></i>Success </button>
<button type="button" className="ti-btn ti-btn-danger-full label-ti-btn label-end
 !rounded-full"><i className="ri-close-line label-ti-btn-icon ms-2 !rounded-full">
 </i>Cancel
 </button>
 </div>`

export const buttons21 = `<div className="ti-btn-list space-x-2 rtl:space-x-reverse">
<button type="button" className="ti-btn ti-btn-info-full custom-button !rounded-full">
<span className="custom-ti-btn-icons">
<i className="ri-twitter-line text-info"></i>
</span>Twitter
</button>
<button type="button" className="ti-btn ti-btn-teal ti-btn-border-down border-0">
Border</button>
<button type="button" className="ti-btn ti-btn-secondary ti-btn-border-start">
Border</button>
<button type="button" className="ti-btn ti-btn-purple ti-btn-border-end">Border
</button>
<button type="button" className="ti-btn ti-btn-warning ti-btn-border-top">
Border
</button>
<button type="button" className="ti-btn ti-btn-danger-full ti-btn-hover 
ti-btn-hover-animate">Like</button>
<button type="button" className="ti-btn ti-btn-success-full ti-btn-darken-hover">
Hover</button>
<button type="button" className="ti-btn ti-btn-orange-full ti-btn-custom-border">
Hover
</button>
</div>`

export const buttons22 = `<div className="ti-btn-list space-x-2 rtl:space-x-reverse">
<div className="grid  gap-2 mb-6">
<button className="ti-btn ti-btn-primary-full ti-btn-wave" type="button">
Button
</button>
<button className="ti-btn ti-btn-secondary-full ti-btn-wave" type="button">
Button
</button>
</div>
<div className="grid gap-2 md:block">
<button className="ti-btn ti-btn-info-full ti-btn-wave" 
type="button">Button
</button>
<button className="ti-btn ti-btn-success-full ti-btn-wave" type="button">Button
</button>
</div>
<div className="grid !mx-auto gap-2 w-[50%] ">
<button className="ti-btn ti-btn-danger-full ti-btn-wave" type="button">
Button</button>
<button className="ti-btn ti-btn-warning-full ti-btn-wave" type="button">
Button
</button>
</div>
<div className="grid gap-2 md:flex md:justify-end">
<button className="ti-btn ti-btn-teal-full md:me-2 ti-btn-wave" 
type="button">Button</button>
<button className="ti-btn ti-btn-purple-full ti-btn-wave" type="button">
Button
</button>
</div>
</div>`

//Button Groups

export const group1 = `<div className="inline-flex rounded-md shadow-sm me-5">
<button type="button"
    className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Year
</button>
<button type="button"
    className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Month
</button>
<button type="button"
    className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Date
</button>
</div>`

export const group2 = `<div className="ti-btn-group" role="group" aria-label="Basic mixed styles example">
<button type="button" className="ti-btn ti-btn-danger ti-btn-wave">Year</button>
<button type="button" className="ti-btn ti-btn-warning ti-btn-wave">Month</button>
<button type="button" className="ti-btn ti-btn-success ti-btn-wave">Date</button>
</div>`

export const group3 = `<div className="flex flex-col md:inline-flex md:flex-row rounded-sm shadow-sm">
<button type="button"
    className="py-2 px-3 inline-flex justify-center items-center gap-2 -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-sm sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-sm border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Item 1
</button>
<button type="button"
    className="py-2 px-3 inline-flex justify-center items-center gap-2 -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-sm sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-sm border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Item 2
</button>
<button type="button"
    className="py-2 px-3 inline-flex justify-center items-center gap-2 -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-sm sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-sm border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Item 3
</button>
</div>`

export const group4 = ` <div className="max-w-xs flex flex-col rounded-sm shadow-sm">
<button type="button"
    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-t-md border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Item 1
</button>
<button type="button"
    className="-mt-px py-2 px-3 inline-flex justify-center items-center gap-2 border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Item 2
</button>
<button type="button"
    className="-mt-px py-2 px-3 inline-flex justify-center items-center gap-2 rounded-b-md border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Item 3
</button>
</div>`

export const group5 = `<div className="inline-flex rounded-md shadow-sm mb-5 me-5">
<button type="button" className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Year
</button>
<button type="button" className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Month
</button>
<button type="button" className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Date
</button>
</div>
<div className="inline-flex rounded-md shadow-sm mb-5 me-5">
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-primary-full border-white/10 dark:border-white/10">
    Year
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-primary-full border-white/10 dark:border-white/10">
    Month
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-primary-full border-white/10 dark:border-white/10">
    Date
</button>
</div>
<div className="inline-flex rounded-md shadow-sm mb-5 me-5">
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-secondary-full border-white/10 dark:border-white/10">
    Year
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-secondary-full border-white/10 dark:border-white/10">
    Month
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-secondary-full border-white/10 dark:border-white/10">
    Date
</button>
</div>
<div className="inline-flex rounded-md shadow-sm mb-5 me-5">
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-warning-full border-white/10 dark:border-white/10">
    Year
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-warning-full border-white/10 dark:border-white/10">
    Month
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-warning-full border-white/10 dark:border-white/10">
    Date
</button>
</div>
<div className="inline-flex rounded-md shadow-sm mb-5 me-5">
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-danger-full border-white/10 dark:border-white/10">
    Year
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-danger-full border-white/10 dark:border-white/10">
    Month
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-danger-full border-white/10 dark:border-white/10">
    Date
</button>
</div>
<div className="inline-flex rounded-md shadow-sm mb-5 me-5">
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-info-full border-white/10 dark:border-white/10">
    Year
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-info-full border-white/10 dark:border-white/10">
    Month
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-info-full border-white/10 dark:border-white/10">
    Date
</button>
</div>
<div className="inline-flex rounded-md shadow-sm mb-0">
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-success-full border-white/10 dark:border-white/10">
    Year
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-success-full border-white/10 dark:border-white/10">
    Month
</button>
<button type="button" className="ti-btn-group py-3 px-4 border ti-btn-success-full border-white/10 dark:border-white/10">
    Date
</button>
</div>`

export const group6 = `<div className="inline-flex rounded-md shadow-sm me-6">
<button type="button"
    className="ti-btn-group border py-3 px-4 bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Small
</button>
<button type="button"
    className="ti-btn-group border py-3 px-4 bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Small
</button>
<button type="button"
    className="ti-btn-group border py-3 px-4 bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
    Small
</button>
</div>

<div className="inline-flex rounded-md shadow-sm me-6">
<button type="button"
    className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 sm:p-4 p-3">
    Default
</button>
<button type="button"
    className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 sm:p-4 p-3">
    Default
</button>
<button type="button"
    className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 sm:p-4 p-3">
    Default
</button>
</div>

<div className="inline-flex rounded-md shadow-sm">
<button type="button"
    className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 p-[1.3125rem]">
    Large
</button>
<button type="button"
    className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 p-[1.3125rem]">
    Large
</button>
<button type="button"
    className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 p-[1.3125rem]">
    Large
</button>
</div>`


//Images & Figures 

export const image1 = `<p className="box-title mb-4 !text-[0.813rem] 
!font-normal">Use <code> .img-fluid </code>class to the img tag to get 
responsive image.</p><div className="text-center">
<img src="../../../assets/images/media/media-48.jpg" 
className="img-fluid !inline-flex" alt="..." /></div>`

export const image2 = `<p className="box-title mb-4 !text-[0.813rem]
 !font-normal">Use <code>.rounded-md</code> class along with <code>.
 img-fluid</code> to get border radius.</p><div className="text-center">
 <img src="../../../assets/images/media/media-49.jpg" 
 className="img-fluid !rounded-md !inline-flex" alt="..." /></div>`

export const image3 = `<p className="box-title mb-4 !text-[0.813rem] 
!font-normal">Use <code>.rounded-full</code> class to <code>img</code> 
tag to get rounded image.</p><div className="text-center">
<img src="../../../assets/images/media/media-50.jpg" 
className="img-fluid !rounded-full !inline-flex" alt="..." /></div>`

export const image4 = `<img className="!rounded-md float-start" 
src="../../../assets/images/media/media-53.jpg" alt="..." />`

export const image5 = `<img className="!rounded-md mx-auto block" 
src="../../../assets/images/media/media-55.jpg" alt="..." />`

export const image6 = `<img className="!rounded-md ltr:float-right
 rtl:float-left" src="../../../assets/images/media/media-54.jpg" alt="..." />`

export const image7 = `<div className="flex justify-between gap-2">
<figure className="figure inline-block mb-4"><img className="m-[0.125rem] 
leading-none img-fluid rounded-md w-full"
 src="../../../assets/images/media/media-56.jpg" alt="..." />
 <figcaption className="text-[0.875em] text-textmuted dark:text-white/70 mt-2">
 A caption for the above image.</figcaption>
 </figure>
 <figure className="figure ltr:float-right rtl:float-left">
 <img className="m-[0.125rem] leading-none img-fluid rounded-md w-full"
  src="../../../assets/images/media/media-57.jpg" alt="..." />
<figcaption className="text-[0.875em] text-textmuted dark:text-white/70 
text-end mt-2">A caption for the above image.
</figcaption>
</figure>
</div>`

export const image8 = `<p className="mb-3">Use <code>ti-img-thumbnail</code> to give an image a rounded 1px border.</p>
<div className="text-center">
<img src="../../../assets/images/media/media-51.jpg" className="ti-img-thumbnail" alt="..." />
</div>`

export const image9 = `<p className="mb-3">Use <code>ti-img-thumbnail-rounded</code> to give an image a rounded 1px border.</p>
<div className="text-center"><img src="../../../assets/images/media/media-52.jpg" className="ti-img-thumbnail-rounded" alt="..." />
</div>`

//List Group

export const list1 = `<p className="mb-3">Use <code>ti-img-thumbnail-rounded</code>
 to give an image a rounded 1px border.</p><div className="text-center">
<img src="../../../assets/images/media/media-52.jpg" className="ti-img-thumbnail-rounded" alt="..." />
</div>`

export const list2 = ` <ul className="ti-list-group">{ActiveButtons.map((idx) =>
     (<li className={a&#768;ti-list-group-item &#36;{idx.class1}a&#769;} aria-current="true" key={Math.random()}>
<div className="flex items-center"><div>
<span className="text-[.9375rem]">
<i className={a&#768;bi bi-&#36;{idx.class}a&#769;}></i>
</span></div>
<div className="ms-2">{idx.text}</div
></div>
</li>
))}
</ul>`

export const list3 = `<ul className="ti-list-group">
{DisableItems.map((idx) =>
     (<li className={a&#768;ti-list-group-item &#36;{idx.text}a&#769;} aria-disabled="true" key={Math.random()}>
     {idx.class</li>))}
     </ul>`

export const list4 = `<ul className="ti-list-group ti-list-group-flush">
<li className="ti-list-group-item !border-t-0 !border-l-0 !border-r-0 font-semibold">
<i className="bi bi-envelope align-middle me-2 text-[#8c9097] dark:text-white/50"></i>
Asish Trivedhi<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">
(+1023-84534)</span>
</li>
<li className="ti-list-group-item !border-l-0 !border-r-0  font-semibold">
<i className="bi bi-tiktok align-middle me-2 text-[#8c9097] dark:text-white/50">
</i>
Alezander Russo
<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+7546-12342)</span>
</li>
<li className="ti-list-group-item !border-l-0 !border-r-0  font-semibold">
<i className="bi bi-whatsapp align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Karem Smith<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+9944-56632)</span></li>
<li className="ti-list-group-item !border-l-0 !border-r-0  font-semibold">
<i className="bi bi-facebook align-middle me-2 text-[#8c9097] dark:text-white/50"></i>
Melissa Brien<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+1023-34323)</span></li>
<li className="ti-list-group-item !border-l-0 !border-r-0 !border-b-0  font-semibold">
<i className="bi bi-instagram align-middle me-2 text-[#8c9097] dark:text-white/50"></i>
Kamala Harris<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+91-63421)</span>
</li>
</ul>`

export const list5 = `<ul className="list-none">
{LinksButtons.map((idx) =>
     (<li className={a&#768;ti-list-group-item ti-list-group-item-action &#36;{idx.class1} &#36;{idx.color1}a&#769;} key={Math.random()}>
     <Link href="#" aria-current="true">
     <div className="flex items-center">
     <div><span className={a&#768;avatar avatar-xs bg-&#36;{idx.class} dark:bg-bodybg !text-&#36;{idx.color}textcolor avatar-roundeda&#769;}>{idx.text1}</span>
     </div>
     <div className="ms-2">{idx.text}</div>
     </div>
     </Link></li>
     ))}
     </ul>`

export const list6 = `<div className="ti-list-group flex flex-col">
<button type="button" className="ti-list-group-item text-start ti-list-group-item-action active" aria-current="true">Simply dummy text of the printing
<span className="badge ltr:float-right rtl:float-left bg-primary text-white">243</span></button>
<button type="button" className="ti-list-group-item text-start ti-list-group-item-action">There are many variations of passages<span className="badge ltr:float-right rtl:float-left bg-secondary/10 text-secondary">35</span></button>
<button type="button" className="ti-list-group-item text-start ti-list-group-item-action">All the Lorem Ipsum generators<span className="badge ltr:float-right rtl:float-left bg-info/10 text-info">132</span></button>
<button type="button" className="ti-list-group-item text-start ti-list-group-item-action">All the LoremIpsum generators<span className="badge ltr:float-right rtl:float-left bg-success/10 text-success">2525</span></button>
<button type="button" className="ti-list-group-item text-start ti-list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge ltr:float-right rtl:float-left bg-danger/10 text-danger">21</span></button>
</div>`

export const list7 = `<ul className="ti-list-group">
{ContextualButtons.map((idx) =>
     (<li className={a&#768;ti-list-group-item &#36;{idx.class}a&#769;} key={Math.random()}>
     {idx.text}
     </li>
     ))}
     </ul>`

export const list8 = `<div className="ti-list-group flex flex-col">
{ContextualButtons1.map((idx) =>
     (<Link href="#" className={a&#768;w-full ti-list-group-item &#36;{idx.class}a&#769;} key={Math.random()}>
     {idx.text}
     </Link>
     ))}
     </div>`

export const list9 = `<ul className="ti-list-group ">
{Solidcolors.map((idx) =>
     (<li className={a&#768;ti-list-group-item &#36;{idx.class}a&#769;} key={Math.random()}>
     {idx.text}</li>
     ))}
     </ul>`

export const list10 = `<ul className="list-none">
<li className="ti-list-group-item ti-list-group-item-action active">
<Link href="#" aria-current="true">
<div className="sm:flex w-full justify-between">
<h6 className="mb-1 font-semibold">Web page editors now use Lorem Ipsum?</h6>
<small>3 days ago</small></div><p className="mb-1">
There are many variations of passages of Lorem Ipsum available, but the majority have 
suffered alteration in some form, by injected humour.</p>
<small>24,Nov 2022.</small>
</Link>
</li>
<li className="ti-list-group-item ti-list-group-item-action ">
<Link href="#">
<div className="flex w-full justify-between">
<h6 className="mb-1 font-semibold">Richard McClintock, a Latin professor?</h6>
<small className="text-[#8c9097] dark:text-white/50">4 hrs ago</small>
</div>
<p className="mb-1">Contrary to popular belief, Lorem Ipsum is not simply random text.
 It has roots in a piece of classical Latin literature.</p>
 <small className="text-[#8c9097] dark:text-white/50">30,Nov 2022.</small>
 </Link>
 </li>
  <li className="ti-list-group-item ti-list-group-item-action ">
  <Link href="#">
  <div className="sm:flex w-full justify-between">
  <h6 className="mb-1 font-semibold">It uses a dictionary of over 200 Latin words?</h6>
  <small className="text-[#8c9097] dark:text-white/50">15 hrs ago</small>
  </div>
  <p className="mb-1">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
  <small className="text-[#8c9097] dark:text-white/50">4,Nov 2022.</small>
  </Link>
  </li>
  <li className="ti-list-group-item ti-list-group-item-action ">
  <Link href="#"><div className="sm:flex w-full justify-between">
  <h6 className="mb-1 font-semibold">The standard Lorem Ipsum used since the 1500s?</h6>
  <small className="text-[#8c9097] dark:text-white/50">45 mins ago</small>
  </div>
  <p className="mb-1">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
   necessary, making this the first true generator on the Internet.</p>
   <small className="text-[#8c9097] dark:text-white/50">28,Oct 2022.</small>
   </Link>
   </li></ul>`

export const list11 = `<ol className="ti-list-group !list-decimal">
<li className="ti-list-group-item flex justify-between items-start">
<div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
<div className="font-semibold text-[.875rem] !text-defaulttextcolor">What Happened?</div> Many experts have recently suggested may exist.</div>
</li>
<li className="ti-list-group-item flex justify-between items-start">
<div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
<div className="font-semibold text-[.875rem] !text-defaulttextcolor">It Was Amazing!</div> His idea involved taking red.</div>
</li>
<li className="ti-list-group-item flex justify-between items-start">
<div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
<div className="font-semibold text-[.875rem] !text-defaulttextcolor">News Is A Great Weapon.</div>  News can influence in many ways.</div>
</li>
<li className="ti-list-group-item flex justify-between items-start">
<div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
<div className="font-semibold text-[.875rem] !text-defaulttextcolor">majority have suffered.</div> If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything.</div
></li>
</ol>`

export const list12 = `<ol className="ti-list-group ti-list-group-numbered">
<li className="ti-list-group-item">Simply dummy text of the printing.</li>
<li className="ti-list-group-item">There are many variations of passages.<li>
<li className="ti-list-group-item">All the Lorem Ipsum generators.</li>
<li className="ti-list-group-item">Written in 45 BC. This book is a treatise on the theory.</li>
<li className="ti-list-group-item">Randomised words which dont look.</li>
<li className="ti-list-group-item">Always free from repetition, injected humour.</li>
</ol>`

export const list13 = `<ul className="ti-list-group">
<li className="ti-list-group-item">
<input className="form-check-input me-1 font-semibold" type="checkbox" value="" aria-label="..." checked />Accurate information at any given point.</li>
<li className="ti-list-group-item">
<input className="form-check-input me-1 font-semibold" type="checkbox" value=""  aria-label="..." /> Hearing the information and responding.</li>
<li className="ti-list-group-item">
<input className="form-check-input me-1 font-semibold" type="checkbox" value="" aria-label="..." checked />Setting up and customizing your own sales.</li>
<li className="ti-list-group-item">
<input className="form-check-input me-1 font-semibold" type="checkbox" value="" aria-label="..." checked />New Admin Launched.</li>
<li className="ti-list-group-item">
<input className="form-check-input me-1 font-semibold" type="checkbox" value="" aria-label="..." />To maximize profits and improve productivity.</li>
<li className="ti-list-group-item">
<input className="form-check-input me-1 font-semibold" type="checkbox" value="" aria-label="..." /> To have a complete 360° overview of sales information, having.</li>
</ul>`

export const list14 = `<ul className="ti-list-group list-none">
<li className="ti-list-group-item">
<input className="form-check-input me-1" type="radio" value="" name="list-radio" checked />Accurate information at any given point.</li>
<li className="ti-list-group-item">
<input className="form-check-input me-1" type="radio" value="" name="list-radio" checked /> Hearing the information and responding.</li>
<li className="ti-list-group-item">
<input className="form-check-input me-1" type="radio" value="" name="list-radio" checked /> Setting up and customizing your own sales.</li>
<li className="ti-list-group-item">
<input className="form-check-input me-1" type="radio" value="" name="list-radio" /> New Admin Launched.</li><li className="ti-list-group-item"> <input className="form-check-input me-1" type="radio" value="" name="list-radio" /> To maximize profits and improve productivity.</li>
<li className="ti-list-group-item">
 <input className="form-check-input me-1" type="radio" value=""  name="list-radio" />To have a complete 360° overview of sales information, having.</li>
</ul>`

export const list15 = `<ul className="ti-list-group">
<li className="ti-list-group-item flex justify-between items-center font-semibold"> Grocies
<span className="badge bg-primary text-white">Available</span>
</li>
<li className="ti-list-group-item flex justify-between items-center font-semibold"> Furniture
<span className="badge bg-secondary text-white">Buy</span>
</li>
<li className="ti-list-group-item flex justify-between items-center font-semibold"> Beauty
<span className="badge bg-danger !rounded-full text-white">32</span>
</li>
<li className="ti-list-group-item flex justify-between items-center font-semibold"> Books
<span className="badge bg-light text-default">New</span>
</li>
<li className="ti-list-group-item flex justify-between items-center font-semibold"> Toys
<span className="badge bg-info-gradient">Hot</span>
</li>
<li className="ti-list-group-item flex justify-between items-center font-semibold"> Mobiles
<span className="badge bg-warning text-white">Sold Out</span>
</li>
</ul>`

export const list16 = `  <ol className="ti-list-group !list-decimal">
<li className="ti-list-group-item flex justify-between items-start">
 <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50"> 
 <div className="font-semibold text-[.875rem] !text-defaulttextcolor">What Happened?</div>
  Many experts have recently suggested may exist. </div>
 </li>
 <li className="ti-list-group-item flex justify-between items-start"> 
 <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
  <div className="font-semibold text-[.875rem] !text-defaulttextcolor">It Was Amazing!</div>
   His idea involved taking red. </div>
  </li>
  <li className="ti-list-group-item flex justify-between items-start"> 
  <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
   <div className="font-semibold text-[.875rem] !text-defaulttextcolor">News Is A Great Weapon.</div>
    News can influence in many ways. </div>
   </li>
   <li className="ti-list-group-item flex justify-between items-start"> 
   <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50"> 
   <div className="font-semibold text-[.875rem] !text-defaulttextcolor">majority have suffered.</div>
    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything. </div>
    </li>
    </ol>`


//Pagination

export const page1 = ` <nav aria-label="Page navigation">
<ul className="ti-pagination  mb-0">
<li className="page-item disabled">
<Link className="page-link px-3 py-[0.375rem]" href="#">Previous</Link>
</li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">1</Link>
</li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">2</Link>
</li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">Next</Link>
</li>
</ul>
</nav>`

export const page2 = `<nav aria-label="Page navigation">
<ul className="ti-pagination mb-0">
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#" aria-label="Previous">
<span aria-hidden="true">
<i className="rtl:rotate-180 bx bx-chevron-left"></i></span></Link>
</li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">1</Link>
</li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">2</Link></li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">3</Link></li>
<li className="page-item">
<Link className="page-link  px-3 py-[0.375rem]" href="#" aria-label="Next">
<span aria-hidden="true">
<i className="rtl:rotate-180 bx bx-chevron-right"></i></span></Link>
</li>
</ul>
</nav>`

export const page3 = `<nav aria-label="Page navigation" className="mb-4">
<ul className="ti-pagination justify-center">
<li className="page-item disabled">
<Link href="#" className="page-link px-3 py-[0.375rem]">Previous</Link>
</li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">1</Link>
</li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">2</Link>
</li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">3</Link>
</li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">Next</Link>
</li>
</ul>
</nav>
<nav aria-label="Page navigation">
<ul className="ti-pagination sm:justify-end justify-center mb-0">
<li className="page-item disabled">
<Link href="#" className="page-link px-3 py-[0.375rem]">Previous</Link></li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">1</Link></li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">2</Link></li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">3</Link></li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">Next</Link></li>
</ul>
</nav>`

export const page4 = `<nav aria-label="Page navigation" className="pagination-style-1">
<ul className="ti-pagination mb-0">
<li className="page-item disabled rtl:rotate-180">
<Link aria-label="anchor" 
className="page-link" href="#"><i className="ri-arrow-left-s-line align-middle"></i></Link>
</li>
<li className="page-item"><Link className="page-link" href="#">1</Link></li>
<li className="page-item "><Link className="page-link active" href="#">2</Link></li>
<li className="page-item"><Link aria-label="anchor"
 className="page-link" href="#"> <i className="bi bi-three-dots"></i></Link></li>
<li className="page-item">
<Link className="page-link" href="#">21</Link></li>
<li className="page-item rtl:rotate-180">
<Link aria-label="anchor" className="page-link" href="#">
 <i className="ri-arrow-right-s-line align-middle"></i></Link>
 </li>
 </ul>
 </nav>`

export const page5 = ` <nav aria-label="Page navigation" className="pagination-style-2">
<ul className="ti-pagination mb-0 flex-wrap">
<li className="page-item disabled">
<Link className="page-link px-3 py-[0.375rem] !border-0" href="#"> Prev</Link>
</li>
<li className="page-item active">
<Link className="page-link px-3 py-[0.375rem] !border-0" href="#">1</Link>
</li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem] !border-0" href="#">2</Link></li>
<li className="page-item">
<Link aria-label="anchor" className="page-link px-3 py-[0.375rem] 
!border-0" href="#"><i className="bi bi-three-dots"></i></Link></li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem] !border-0" href="#">17</Link></li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem] !text-primary !border-0" href="#">next</Link>
</li>
</ul>
</nav>`

export const page6 = ` <nav aria-label="Page navigation" className="pagination-style-3">
<ul className="ti-pagination mb-0 flex-wrap">
<li className="page-item disabled"><Link className="page-link" href="#"> Prev</Link></li>
<li className="page-item "><Link className="page-link active" href="#">1</Link></li>
<li className="page-item"><Link className="page-link" href="#">2</Link></li>
<li className="page-item"><Link aria-label="anchor" className="page-link" href="#">
<i className="bi bi-three-dots"></i></Link></li>
<li className="page-item"><Link className="page-link" href="#">16</Link></li>
<li className="page-item"><Link className="page-link !text-primary" href="#"> next </Link></li>
</ul>
</nav>`

export const page7 = `<nav aria-label="Page navigation" className="pagination-style-4">
<ul className="ti-pagination mb-0 flex-wrap">
<li className="page-item disabled"><Link className="page-link" href="#">  Prev</Link></li>
<li className="page-item ">
<Link className="page-link active" href="#">1</Link>
</li><li className="page-item"><Link className="page-link" href="#">2</Link></li>
 <li className="page-item">
 <Link aria-label="anchor" className="page-link" href="#"><i className="bi bi-three-dots">
 </i></Link>
 </li> 
 <li className="page-item"><Link className="page-link" href="#">16</Link></li>
<li className="page-item"><Link className="page-link !text-primary" href="#">next</Link></li>
</ul>
</nav>`



//progress

export const progress1 = `{basicprogress.map((idx)=>
    (<div className="progress mb-4 !rounded-full" aria-valuenow={idx.valuenow} aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
    <div className={a&#768;progress-bar &#36;{idx.width}a&#769;}>
    </div>
    </div>))}`

export const progress2 = `{colorprogress.map((idx)=>
    (<div className="progress mb-4" aria-valuenow={idx.valuenow} aria-valuemin="0" key={Math.random()}  aria-valuemax="100">
    <div className={a&#768;progress-bar !bg-&#36;{idx.color} !rounded-s-full &#36;{idx.width}a&#769;}>
    </div>
    </div>
     ))}`

export const progress3 = `{stripped.map((idx)=>(
    <div className="progress mb-4" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
    <div className={a&#768;progress-bar progress-bar-striped &#36;{idx.color} &#36;{idx.width}a&#769;}>
    </div>
    </div>))}`

export const progress4 = `<div className="box-body">
<div className="progress progress-xs mb-4" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar bg-primary !rounded-s-full w-[10%]">
</div>
</div>
<div className="progress progress-sm mb-4" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary !rounded-s-full w-1/4"></div>
</div>
<div className="progress mb-4" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary !rounded-s-full w-2/4"></div>
</div>
<div className="progress progress-lg mb-4" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary !rounded-s-full w-3/4">
</div>
</div>
<div className="progress progress-xl" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary !rounded-s-full w-full">
</div></div>
</div>`

export const progress5 = `{lables.map((idx)=>(
    <div className="progress mb-4" key={Math.random()} aria-valuenow={idx.valuenow} aria-valuemin="0" aria-valuemax="100">
    <div className={a&#768;progress-bar !rounded-s-full &#36;{idx.color} &#36;{idx.width}a&#769;}>
    {idx.class}
    </div>
    </div>
    ))}`

export const progress6 = ` <div className="box-body">
<div className="progress-stacked progress-xs mb-4 flex">
<div className="progress-bar w-[5%]" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div> 
<div className="progress-bar !bg-secondary !rounded-none w-[10%]" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
</div>
<div className="progress-bar !bg-success !rounded-none w-[15%]" 
aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progress-stacked progress-sm mb-4 flex">
<div className="progress-bar !bg-warning w-[10%]" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
<div className="progress-bar !bg-info !rounded-none w-[15%]" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
<div className="progress-bar !bg-danger !rounded-none w-[20%]" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div><div className="progress-stacked mb-4 flex">
<div className="progress-bar !bg-info w-[15%]" aria-valuenow="15" aria-valuemin="0" ari
a-valuemax="100"></div>
<div className="progress-bar !bg-success !rounded-none w-1/5"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
<div className="progress-bar !rounded-none w-1/4"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progress-stacked progress-lg mb-4 flex"><div className="progress-bar !bg-purple w-1/5"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
<div className="progress-bar !bg-teal !rounded-none w-1/4"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
<div className="progress-bar !bg-orange !rounded-none w-[30%]"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progress-stacked progress-xl mb-0 flex"> 
<div className="progress-bar !bg-success w-1/4"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> 
<div className="progress-bar !bg-danger !rounded-none w-[30%]"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
<div className="progress-bar !bg-warning !rounded-none w-[35%]"  aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>`

export const progress7 = `{animated.map((idx)=>(
    <div className="progress mb-4" aria-valuenow={idx.valuenow} 
aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
    <div className={a&#768;progress-bar &#36;{idx.class}a&#769;}>
    </div>
    </div>
    ))}`

export const progress8 = `{Gradient.map((idx)=>(
    <div className="progress mb-4" aria-valuenow={idx.valuenow} 
    aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
<div className={a&#768;progress-bar bg-&#36;{idx.color}-gradient &#36;{idx.width}a&#769;}>
    </div>
    </div>
    ))}`

export const progress9 = `{Gradient.map((idx)=>(
    <div className="progress mb-4 progress-animate" aria-valuenow=
{idx.valuenow} aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
    <div className={a&#768;progress-bar bg-&#36;{idx.color}-gradient &#36;{idx.width}a&#769;}>
    </div> 
    </div>
    ))}`

export const progress10 = `  <div className="progress progress-sm 
progress-custom mb-[3rem] progress-animate" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
<h6 className="progress-bar-title text-[1rem]">Mobiles</h6>
<div className="progress-bar w-1/2">
<div className="progress-bar-value !bg-primary">50%</div>
</div></div>
<div className="progress progress-sm progress-custom mb-[3rem] progress-animate" 
aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
<h6 className="progress-bar-title !bg-secondary text-[1rem] after:!border-s-secondary">Watches</h6>
<div className="progress-bar progress-secondary w-3/5">
<div className="progress-bar-value !bg-secondary">60%</div>
</div></div>
<div className="progress progress-sm progress-custom progress-animate" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
<h6 className="progress-bar-title !bg-success text-[1rem] after:!border-s-success">Shirts</h6>
<div className="progress-bar progress-success w-[70%]"><div className="progress-bar-value !bg-success">70%</div
></div>
</div>`

export const progress11 = `<div className="progress progress-sm mb-4" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
<div className="progress-item-1 !bg-primary"></div>
<div className="progress-item-2"></div>
<div className="progress-item-3"></div><div className="progress-bar w-1/2"></div>
</div>
<div className="progress progress-sm mb-4" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
<div className="progress-item-1 !bg-secondary"></div><div className="progress-item-2 !bg-secondary"></div>
<div className="progress-item-3"></div><div className="progress-bar !bg-secondary w-3/5"></div>
</div>
<div className="progress progress-sm mb-4" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
<div className="progress-item-1 !bg-success"></div><div className="progress-item-2 !bg-success"></div>
<div className="progress-item-3"></div><div className="progress-bar !bg-success w-[70%]"></div>
</div><div className="progress progress-sm mb-4" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
<div className="progress-item-1 !bg-info"></div>
<div className="progress-item-2 !bg-info"></div>
<div className="progress-item-3 !bg-info"></div>
<div className="progress-bar !bg-info w-4/5"></div></div>
<div className="progress progress-sm" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
<div className="progress-item-1 !bg-warning"></div><div className="progress-item-2 !bg-warning"></div>
<div className="progress-item-3 !bg-warning"></div><div className="progress-bar !bg-warning w-[90%]"></div>
</div>`

export const progress12 = `<div className="progress progress-lg mb-[3rem] 
custom-progress-3 progress-animate" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar w-1/2">
<div className="progress-bar-value">50%</div>
</div></div>
<div className="progress progress-lg mb-[3rem] custom-progress-3 
progress-animate" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar !bg-secondary w-3/5">
<div className="progress-bar-value secondary">60%</div>
</div></div>
<div className="progress progress-lg custom-progress-3
 progress-animate" aria-valuenow="70" aria-valuemin="0" 
 aria-valuemax="100"><div className="progress-bar !bg-success w-[70%]">
 <div className="progress-bar-value success">70%</div>
</div>
</div>`

export const progress13 = `{Custom.map((idx) => (
    <div className={a&#768;progress progress-xl mb-4 progress-animate
         custom-progress-4 &#36;{idx.color}a&#769;} aria-valuenow={idx.valuenow}
 aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
    <div className={a&#768;progress-bar bg-&#36;{idx.color}-gradient 
    !rounded-sm &#36;{idx.width}a&#769;}></div>
    <div className="progress-bar-label">{idx.valuenow}%</div>
    </div>
    ))}`

export const progress14 = `<div className="box-body">
<h6 className="font-semibold mb-2">Project Dependencies</h6>
<div className="progress-stacked progress-xl mb-[3rem] flex">
<div className="progress-bar w-1/2" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
<div className="progress-bar !bg-secondary !rounded-none w-[35%]" 
aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
<div className="progress-bar !bg-danger !rounded-s-none !rounded-e-full w-2/5"
 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
</div>
<div className="grid grid-cols-12 justify-center">
<div className="xl:col-span-5 col-span-12">
<div className="border border-defaultborder dark:border-defaultborder/10 p-4 rounded-md">
<p className="text-[0.75rem] font-semibold mb-0 text-[#8c9097] dark:text-white/50">Html<span className="ltr:float-right rtl:float-left text-[0.625rem] font-normal">25%</span></p>
<div className="progress progress-xs mb-4 progress-animate" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary w-1/2"></div>
</div>
<p className="text-[0.75rem] font-semibold mb-0 text-[#8c9097] dark:text-white/50">Css<span className="ltr:float-right rtl:float-left text-[0.625rem] font-normal">35%</span></p>
<div className="progress progress-xs mb-4 progress-animate " aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar !rounded-none !bg-secondary w-[35%]">
</div></div><p className="text-[0.75rem] font-semibold mb-0 text-[#8c9097] dark:text-white/50">Js<span className="ltr:float-right rtl:float-left text-[0.625rem] font-normal">40%</span></p>
<div className="progress progress-xs mb-0 progress-animate" 
aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar !rounded-e-full !bg-danger w-2/5">
</div>
</div>
</div>
</div>
</div>
</div>`

export const pagination15 = ` <div className="box-body flex flex-wrap justify-between gap-2"><nav aria-label="...">
 <ul className="ti-pagination pagination-sm mb-0"> 
 <li className="page-item " aria-current="page"> 
 <span className="page-link  active px-3 py-[0.375rem]">1</span> 
 </li> 
 <li className="page-item">
 <Link className="page-link px-3 py-[0.375rem]" href="#">2</Link>
 </li> 
 <li className="page-item">
 <Link className="page-link px-3 py-[0.375rem]" href="#">3</Link>
 </li> 
 </ul>
 </nav>
 <nav aria-label="...">
  <ul className="ti-pagination mb-0">
   <li className="page-item " aria-current="page"> 
   <span className="page-link  active px-3 py-[0.375rem]">1</span> </li>
    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">2</Link></li>
     <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">3</Link></li>
      </ul>
      </nav>
      <nav aria-label="...">
       <ul className="ti-pagination pagination-lg mb-0">
        <li className="page-item " aria-current="page"> <span className="page-link active px-3 py-[0.375rem]">1</span> </li>
         <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">2</Link></li> 
         <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">3</Link></li> <
         /ul>
         </nav
         ></div>`

export const pagination16 = `  <div className="box-body flex flex-wrap">
<nav aria-label="..." className="me-4"><ul className="ti-pagination">
<li className="page-item disabled"><Link href="#" className="page-link px-3 py-[0.375rem]">Previous</Link></li>
<li className="page-item">
<Link className="page-link px-3 py-[0.375rem]" href="#">1</Link></li>
<li className="page-item " aria-current="page"><Link className="page-link active px-3 py-[0.375rem]" href="#">2</Link></li>
<li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">Next</Link></li>
</ul>
</nav>
<nav aria-label="...">
<ul className="ti-pagination">
<li className="page-item disabled">
<span className="page-link px-3 py-[0.375rem]">Previous</span></li>
<li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">1</Link></li>
<li className="page-item " aria-current="page"><span className="page-link px-3 active py-[0.375rem]">2</span></li>
<li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#">Next</Link></li>
</ul>
</nav>
</div>`

//Spinners

export const spinner1 = `<div className="ti-spinner" role="status">
<span className="sr-only">Loading...</span>
</div>`

export const spinner2 = `{Colorspinner.map((idx) =>(
     <div className={a&#768;ti-spinner text-&#36;{idx.color}a&#769;} role="status" key={Math.random()}>
     <span className="sr-only">Loading...</span>
     </div>
     ))}`

export const spinner3 = `<div className="ti-spinner !bg-black dark:!bg-light !animate-ping !border-transparent " role="status" aria-label="loading"><span className="sr-only">Loading...</span></div>`

export const spinner4 = `<div className="space-x-6 space-y-4 rtl:space-x-reverse">
<div className="ti-spinner !animate-ping !border-transparent  bg-primary" role="status" aria-label="loading">
<span className="sr-only">Loading...</span>
</div>
<div className="ti-spinner !animate-ping !border-transparent  bg-secondary" role="status" aria-label="loading">
<span className="sr-only">Loading...</span>
</div>
<div className="ti-spinner !animate-ping !border-transparent  bg-warning" role="status" aria-label="loading"> 
<span className="sr-only">Loading...</span></div>
<div className="ti-spinner !animate-ping !border-transparent  bg-danger" role="status" aria-label="loading">
<span className="sr-only">Loading...</span></div>
<div className="ti-spinner !animate-ping !border-transparent  bg-success" role="status" aria-label="loading">
<span className="sr-only">Loading...</span></div>
<div className="ti-spinner !animate-ping !border-transparent  bg-info" role="status" aria-label="loading">
<span className="sr-only">Loading...</span></div>
<div className="ti-spinner !animate-ping !border-transparent  bg-black/20 dark:!bg-light dark:animate-ping "  role="status" aria-label="loading">
<span className="sr-only">Loading...</span></div>
<div className="ti-spinner !animate-ping !border-transparent  bg-gray-400" role="status" aria-label="loading">
<span className="sr-only">Loading...</span>
</div>
</div>`

export const spinner5 = `<div className="flex justify-center mb-6">
<div className="ti-spinner" role="status"><span className="sr-only">Loading...</span>
</div></div>
<div className="flex items-center justify-between"><strong>Loading...</strong>
<div className="ti-spinner" role="status"><span className="sr-only">Loading...</span>
</div>
</div>`

export const spinner6 = `<div className="clearfix mb-6">
<div className="ti-spinner ltr:float-right rtl:float-left" role="status">
<span className="sr-only">Loading...</span>
</div></div><div className="clearfix">
<div className="ti-spinner ltr:float-left rtl:float-right" role="status"><span className="sr-only">Loading...</span>
</div>
</div>`

export const spinner7 = `<div className="text-center">
<div className="ti-spinner" role="status">
<span className="sr-only">Loading...</span>
</div>
</div>`

export const spinner8 = `<div className="ti-spinner m-[3rem]" role="status">
<span className="sr-only">Loading...</span>
</div>`

export const spinner9 = `   <div className="box-body ">
<div className="ti-spinner !w-[1rem] !h-[1rem] me-6" role="status"> <span className="sr-only">Loading...</span>
</div>
<div className="ti-spinner !w-[1rem] !h-[1rem] !bg-black dark:!bg-white !animate-ping !border-transparent me-6" role="status"> 
<span className="sr-only">Loading...</span>
</div>
<div className="ti-spinner me-6 w-12 h-12" role="status"> 
<span className="sr-only">Loading...</span></div>
<div className="ti-spinner !bg-black dark:!bg-white !animate-ping !border-transparent w-8 h-8" role="status">
 <span className="sr-only">Loading...</span>
 </div>
 </div>`

export const spinner10 = `{Buttonspinner.map((idx)=>(
    <button type="button" className={a&#768;ti-btn ti-btn-disabled ti-btn-&#36;{idx.color}a&#769;} disabled key={Math.random()}>
    <span className="ti-spinner text-white" role="status" aria-label="loading">
    <span className="sr-only">Loading...</span>
    </span>
    </button>
    <button type="button" className={a&#768;ti-btn ti-btn-disabled ti-btn-&#36;{idx.color}a&#769;} disabled><span className="ti-spinner text-white" role="status" aria-label="loading"></span><span>Loading...</span>
    </button>
    ))}`

//Toasts

export const toast1 = ` <div className="lg:flex lg:space-x-3 rtl:space-x-reverse space-y-4 lg:space-y-0">
<div className="ti-toast bg-white dark:bg-bodybg dark:border-white/10" role="alert"><div className="flex p-4">
<div className="flex-shrink-0">
<svg className="h-4 w-4 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
<path  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg></div> <div className="ms-3">
 <p className="text-sm text-gray-700 dark:text-[#8c9097] dark:text-white/50">  This is a normal message. </p>
 </div>
 </div>
 </div>
 </div>`

export const toast2 = ` <div className="ti-toast hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-white  dark:bg-bodybg dark:border-white/10" role="alert">
<div className="flex p-4">
 <p className="text-sm text-gray-700 dark:text-[#8c9097] dark:text-white/50"> Your email has been sent</p>
 <div className="ms-auto flex items-center space-x-3 rtl:space-x-reverse">
 <button type="button"  className="inline-flex justify-center items-center gap-2 rounded-sm border-transparent font-medium text-primary hover:underline focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm">  Undo</button>
 <button type="button"  className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-sm dark:focus:ring-white/10 dark:focus:ring-offset-white/10"><span className="sr-only">Close</span>
 <svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" /></svg>
 </button>
 </div>
 </div>`

export const toast3 = `  {ColorToasts.map((idx) =>(
     <div key={Math.random()}>
     <div className={a&#768;ti-toast bg-&#36;{idx.color2} text-sm text-whitea&#769;} role="alert"> 
     <div className="flex p-4"> Hello, world! This is a toast message.<div className="ms-auto">
     <button type="button"  className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5]  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white/10 focus:ring-gray-600 transition-all text-sm dark:focus:ring-offset-white/10 dark:focus:ring-white/10"><span className="sr-only">Close</span>
     <svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none"  xmlns="http://www.w3.org/2000/svg">  <pathd="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" /></svg>
      </button>
      </div>
      </div>
      </div>
      </div> 
      ))}`

export const toast4 = `<div className="space-y-3">
{ColorToasts.map((idx) =>(
    <div key={Math.random()}>
    <div className={a&#768;ti-toast bg-&#36;{idx.color2}/10 text-sm text-&#36;{idx.color2}a&#769;} role="alert">
     <div className="flex p-4"> Hello, world! This is a toast message.<div className="ms-auto"> 
     <button type="button" className={a&#768;inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-&#36;{idx.color2}  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white/10 focus:ring-gray-600 transition-all text-sm dark:focus:ring-offset-white/10 dark:focus:ring-white/10a&#769;}><span className="sr-only">Close</span>
     <svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" /></svg></button>
      </div>
      </div>
      </div>
      </div>
      ))}</div>`

export const toast5 = `<div className="ti-toast bg-white dark:bg-bodybg dark:border-white/10" role="alert">
<div className="flex items-center p-4">
<div className="ti-spinner w-4 h-4 text-primary" role="status" aria-label="loading">
 <span className="sr-only">Loading...</span>
 </div>
 <p className="ms-3 text-sm text-gray-700 dark:text-[#8c9097] dark:text-white/50"> Action in progress</p>
 </div>
 </div>`

export const toast6 = `  <div id="dismiss-toast" className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 ti-toast bg-white dark:bg-bodybgdark:border-white/10" role="alert">
<div className="flex p-4">
<p className="text-sm text-gray-700 dark:text-[#8c9097] dark:text-white/50"> Your email has been sent</p>
<div className="ms-auto">
<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white text-sm dark:focus:ring-white/10 dark:focus:ring-offset-white/10" data-hs-remove-element="#dismiss-toast">
<span className="sr-only">Close</span>
<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
</svg></button>
</div></div>
</div>`

//Tooltip

export const tooltip1 = `<div className="ti-btn-list">
{tooltipdirection.map((idx) =>(
    <div className={a&#768;hs-tooltip ti-main-tooltip &#36;{idx.class}a&#769;} key={Math.random()}>
    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary-full">
    {idx.text}
    <span className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm " role="tooltip">{idx.text}</span>
    </button>
    </div>))}
    </div>`

export const tooltip2 = ` <div className="ti-btn-list">
{colortooltip.map((idx)=>(
    <div className={a&#768;hs-tooltip ti-main-tooltip &#36;{idx.class}a&#769;} key={Math.random()}>
    <button type="button" className={a&#768;hs-tooltip-toggle ti-btn ti-btn-&#36;{idx.color}a&#769;}>
    {idx.text}
    <span className={a&#768;hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-&#36;{idx.class1} !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700a&#769;} role="tooltip"> {idx.text}</span>
    </button>
    </div>))}
    </div>`

export const tooltip3 = `<div className="hs-tooltip ti-main-tooltip [--placement:top]">
<p className="text-muted mb-0"> Hover on the link to view the <Link aria-label="anchor" href="#" title="Link Tooltip"></Link>
<span className="hs-tooltip-toggle !text-primary"> Tooltip<span  className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-1 !bg-primary !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip"> Link Tooltip</span>
</span></p>
</div>`

export const tooltip4 = `<div className="hs-tooltip ti-main-tooltip [--placement:top]">
<button type="button" className="hs-tooltip-toggle me-4">
<svg xmlns="http://www.w3.org/2000/svg" className="fill-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
<path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>
<span className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip"> Home</span>
</button>
</div>`

export const tooltip5 = `<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary-full opacity-[0.6]"> Disabled button<span className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm " role="tooltip">  Disabled Tooltip</span>
</button>
</div>`

export const tooltip6 = `<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle avatar avatar-md me-2 online avatar-rounded">
<img src="../../../assets/images/faces/12.jpg" alt="img" /></button>
<span className="hs-tooltip-content  ti-main-tooltip-content !py-1 !px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm " role="tooltip"> Alex Carey</span>
</div>`

export const tooltip7 = ` <div className="box-body flex">
<div className="hs-tooltip ti-main-tooltip [--placement:top]"> 
<button type="button" className="hs-tooltip-toggle me-4"> 
<svg xmlns="http://www.w3.org/2000/svg" className="fill-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> 
<path d="M0 0h24v24H0V0z" fill="none" /> <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /> </svg> 
<span className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip"> Home </span> </button></div><div className="hs-tooltip ti-main-tooltip [--placement:top]"> <button type="button" className="hs-tooltip-toggle me-4"> 
<svg xmlns="http://www.w3.org/2000/svg" className="fill-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> 
<path d="M0 0h24v24H0V0z" fill="none" />
 <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /> </svg> <span className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-secondary !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip"> Message </span> </button></div>
 <div className="hs-tooltip ti-main-tooltip [--placement:top]">
  <button type="button" className="hs-tooltip-toggle me-4"> 
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-warning" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> <g> <rect fill="none" height="24" width="24" /> </g> <g> 
  <path d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z" /> </g> </svg> <span className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-warning !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip"> Add User </span> </button></div><div className="hs-tooltip ti-main-tooltip [--placement:top]">
   <button type="button" className="hs-tooltip-toggle me-4"> <svg xmlns="http://www.w3.org/2000/svg" className="fill-info" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> <path d="M0 0h24v24H0V0z" fill="none" /> 
   <path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" /> </svg> <span className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-info !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip"> Send File </span> 
  </button></div>
  <div className="hs-tooltip ti-main-tooltip [--placement:top]"> <button type="button" className="hs-tooltip-toggle me-4"> <svg xmlns="http://www.w3.org/2000/svg" className="fill-success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> <path d="M0 0h24v24H0V0z" fill="none" /> <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /> </svg> <span className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-success !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700" role="tooltip"> Action </span> </button>
  </div>
  </div>`

//dropdowns 

export const dropdown1 = `<div className="ti-btn-list flex align-center flex-wrap">
<div className="hs-dropdown ti-dropdown me-2">
<button className="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2"type="button" id="dropdownMenuButton1"aria-expanded="false">Dropdown button<iclassName="ri-arrow-down-s-line align-middle ms-1 inline-block"></i></button>
<ul className="hs-dropdown-menu ti-dropdown-menu hidden"aria-labelledby="dropdownMenuButton1">
<li><Link className="ti-dropdown-item" href="#">Action</Link></li>
<li><Link className="ti-dropdown-item" href="#">Anotheraction</Link></li>
<li><Link className="ti-dropdown-item" href="#">Something elsehere</Link></li></ul>
</div>
<div className="hs-dropdown ti-dropdown">
<Link className="ti-btn ti-btn-secondary-full ti-dropdown-toggle !py-2"href="#" id="dropdownMenuLink" aria-expanded="false">Dropdown link<iclassName="ri-arrow-down-s-line align-middle ms-1 inline-block"></i></Link>
<ul className="hs-dropdown-menu ti-dropdown-menu hidden"aria-labelledby="dropdownMenuLink">
<li><Link className="ti-dropdown-item" href="#">Action</Link></li>
<li><Link className="ti-dropdown-item" href="#">Anotheraction</Link></li>
<li><Link className="ti-dropdown-item" href="#">Something elsehere</Link></li>
</ul>
</div>
</div>`

export const dropdown2 = ` <div className="ti-btn-list">
{SingleButtons.map((idx)=>(
    <div className="ti-btn-group" key={Math.random()}>
    <div className="hs-dropdown ti-dropdown">
    <button className={a&#768;ti-btn ti-btn-&#36;{idx.class}-full ti-dropdown-togglea&#769;} type="button"id="dropdownMenuButton2"aria-expanded="false">Action<iclassName="ri-arrow-down-s-line align-middle ms-1 inline-block"></i></button>
    <ul className="hs-dropdown-menu ti-dropdown-menu hidden"aria-labelledby="dropdownMenuButton2">
    <li><Link className="ti-dropdown-item" href="#">Action</Link></li>
    <li><Link className="ti-dropdown-item" href="#">Anotheraction</Link></li>
    <li><Link className="ti-dropdown-item" href="#">Somethingelse here</Link></li>
    </ul>
    </div>
    </div>
    ))}
    </div>`

export const dropdown3 = ` <div className="ti-btn-list">
{SingleButtons.map((idx)=>(
    <div className="ti-btn-group" key={Math.random()}>
    <div className="hs-dropdown ti-dropdown">
    <button className={a&#768;ti-btn ti-btn-&#36;{idx.class}-full ti-dropdown-toggle !rounded-fulla&#769;} type="button"id="dropdownMenuButton2"aria-expanded="false">Action<iclassName="ri-arrow-down-s-line align-middle ms-1 inline-block"></i></button>
    <ul className="hs-dropdown-menu ti-dropdown-menu hidden"aria-labelledby="dropdownMenuButton2">
    <li><Link className="ti-dropdown-item" href="#">Action</Link></li>
    <li><Link className="ti-dropdown-item" href="#">Anotheraction</Link></li>
    <li><Link className="ti-dropdown-item" href="#">Somethingelse here</Link></li>
    </ul></div>
    </div>
    ))}
    </div>`

export const dropdown4 = `<div className="ti-btn-list">
{SingleButtons.map((idx)=>(
    <div className="ti-btn-group" key={Math.random()}>
    <div className="hs-dropdown ti-dropdown">
    <button className={a&#768;ti-btn ti-btn-outline-&#36;{idx.class} ti-dropdown-toggle a&#769;} type="button"id="dropdownMenuButton2" aria-expanded="false">Action<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i></button>
    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" aria-labelledby="dropdownMenuButton2"><li><LinkclassName="ti-dropdown-item"href="#">Action</LinkclassName=></li>
    <li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
    <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li>
    </ul>
    </div>
    </div>
    ))}
    </div>`

export const dropdown5 = `<div className="ti-btn-list">
{SingleButtons.map((idx)=>(
    <div className="ti-btn-group" key={Math.random()}>
     <div className="hs-dropdown ti-dropdown"> 
      <button className={a&#768;ti-btn ti-btn-outline-&#36;{idx.class} ti-dropdown-toggle !rounded-fulla&#769;} type="button"id="dropdownMenuButton2"aria-expanded="false">Action<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i> 
       </button> 
        <ul className="hs-dropdown-menu ti-dropdown-menu hidden"aria-labelledby="dropdownMenuButton2"><li>
        <Link className="ti-dropdown-item" href="#">Action</Link></li
        ><li><Link className="ti-dropdown-item" href="#">Another action</Link></li><li><Link className="ti-dropdown-item" href="#">Something else here</Link></li>  </ul>
         </div></div>))}
        </div>`

export const dropdown6 = `<div className="ti-btn-list">
{SingleButtons.map((idx) =>(
    <div className="ti-btn-group !m-0" key={Math.random()}>
    <div className="hs-dropdown ti-dropdown">
    <buttonclassName={a&#768;ti-btn ti-btn-&#36;{idx.class}-full !me-0 !rounded-e-none ti-dropdown-togglea&#769;}type="button" id="dropdownMenuButton26"aria-expanded="false">Action</button>
    <button type="button" aria-label="button"className={a&#768;ti-btn ti-btn-&#36;{idx.class}-full opacity-[0.85] !rounded-s-nonea&#769;}><iclassName="ri-arrow-down-s-line align-middle inline-block"></iclassName=></button>
    <ul className="hs-dropdown-menu ti-dropdown-menu hidden"aria-labelledby="dropdownMenuButton26">
    <li><Link className="ti-dropdown-item" href="#">Action</Link></li>
    <li><Link className="ti-dropdown-item" href="#">Anotheraction</Link></li>
    <li><Link className="ti-dropdown-item" href="#">Somethingelse here</Link></li>
    </ul>
    </div>
    </div>
    ))}
    </div>`

export const dropdown7 = ` <div className="ti-btn-group my-1 me-2 ti-dropdown hs-dropdown">
<button className="ti-btn-primary-full ti-btn-lg ti-dropdown-toggle" type="button" aria-expanded="false"> Large button<i className="ri-arrow-down-s-line align-middle inline-block"></i></button>
<ul className="hs-dropdown-menu ti-dropdown-menu hidden">
 <li><Link className="ti-dropdown-item" href="#">Action</Link></li> 
 <li><Link className="ti-dropdown-item" href="#">Another action</Link> </li>
  <li><Link className="ti-dropdown-item" href="#">Something else  here</Link></li>
   <li>  <hr className="dropdown-divider" /> </li>
    <li><Link className="ti-dropdown-item" href="#">Separated link</Link> </li>
    </ul>
    </div>`

export const dropdown8 = `<div className="hs-dropdown ti-dropdown [--placement:top-left] m-1">
<button id="hs-dropup" type="button"className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2">
Dropup
<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white"width="16" height="16" viewBox="0 0 16 16" fill="none"xmlns="http://www.w3.org/2000/svg">
<pathd="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
<div className="hs-dropdown-menu  mt-0 transition-none ti-dropdown-menu hidden"aria-labelledby="hs-dropup">
<Link className="ti-dropdown-item" href="#">Action</Link>
<Link className="ti-dropdown-item" href="#">Another action</Link>
<Link className="ti-dropdown-item" href="#">Something else here</Link>
</div></div>
<div className="ti-dropdown m-1">
<button type="button" className="relative ti-dropdown-toggle  ti-btn ti-btn-secondary-full !py-1 !rounded-e-none !me-0">Split dropup</button>
<div className="hs-dropdown ti-dropdown [--placement:top-left]">
<button id="hs-split-dropup" type="button"className="hs-dropdown-toggle relative ti-btn ti-btn-secondary-full !opacity-[0.85]  !rounded-s-none ti-dropdown-toggle">
<span className="sr-only">Toggle Dropdown</span>
<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white"width="16" height="16" viewBox="0 0 16 16" fill="none"xmlns="http://www.w3.org/2000/svg">
<pathd="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
<div className="hs-dropdown-menu  transition-none mt-0 ti-dropdown-menu hidden"aria-labelledby="hs-split-dropup">
<Link className="ti-dropdown-item" href="#">Action</Link>
<Link className="ti-dropdown-item" href="#">Another action</Link>
<Link className="ti-dropdown-item" href="#">Something else here</Link>
</div></div
></div>`

export const dropdown9 = `  <div className="hs-dropdown ti-dropdown [--placement:right-top] m-1">
<button id="hs-dropright" type="button"className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2">Dropright
<svg className="w-auto h-2.5 ti-dropdown-caret !text-white" width="16" height="16"viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<pathd="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><svg></button>
<div className="hs-dropdown-menu  ti-dropdown-menu transition-none hidden"aria-labelledby="hs-dropright">
<Link className="ti-dropdown-item" href="#">Action</Link>
<Link className="ti-dropdown-item" href="#">Another action</Link>
<Link className="ti-dropdown-item" href="#">Something else here</Link>
<Link href="#" aria-label="anchor"><hr className="dropdown-divider" /></Link>
<Link className="ti-dropdown-item" href="#">Separated link</Link>
</div></div><div className="hs-dropdown ti-dropdown [--placement:right-top] m-1">
<button type="button"className="hs-dropdown-toggle relative ti-btn ti-btn-secondary-full  !py-2 !rounded-e-none ti-dropdown-toggle !me-0">Split dropright</button><div className="hs-dropdown ti-dropdown [--placement:right-top]"><button id="hs-split-dropright" type="button"className="hs-dropdown-toggle relative  ti-dropdown-toggle !opacity-[0.85] rounded-none  ti-btn ti-btn-secondary-full !rounded-s-none">
<span className="sr-only">Toggle Dropdown</span>
<svg className="w-auto h-2.5 ti-dropdown-caret !text-white" width="16"height="16" viewBox="0 0 16 16" fill="none"xmlns="http://www.w3.org/2000/svg"><pathd="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
<div className="hs-dropdown-menu ti-dropdown-menu transition-none hidden"aria-labelledby="hs-split-dropright">
<Link className="ti-dropdown-item" href="#">Action</Link>
<Link className="ti-dropdown-item" href="#">Another action</Link>
<Link className="ti-dropdown-item" href="#">Something else here</Link>
<Link href="#" aria-label="anchor"><hr className="dropdown-divider" /></Link>
<Link className="ti-dropdown-item" href="#">Separated link</Link>
</div>
</div>
</div>`

export const dropdown10 = `  <div className="hs-dropdown ti-dropdown [--placement:left-top] m-1">
<button id="hs-dropright3" type="button"className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2">
<svg className="w-auto h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16"fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14"stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>Dropleft</button><div className="hs-dropdown-menu  ti-dropdown-menu transition-none hidden"aria-labelledby="hs-dropright">
<Link className="ti-dropdown-item" href="#">Action</Link>
<Link className="ti-dropdown-item" href="#">Another action</Link>
<Link className="ti-dropdown-item" href="#">Something else here</Link>
<Link href="#" aria-label="anchor"><hr className="dropdown-divider" /></Link>
<Link className="ti-dropdown-item" href="#">Separated link</Link></div>
</div
><div className="hs-dropdown ti-dropdown [--placement:left-top] m-1">
<div className="hs-dropdown ti-dropdown [--placement:left-top]">
<button id="hs-split-dropright1" type="button"className="hs-dropdown-toggle relative  ti-dropdown-toggle !opacity-[0.85] rounded-none  ti-btn ti-btn-secondary-full !rounded-e-none"><span className="sr-only">Toggle Dropdown</span><svg className="w-auto h-2.5 text-white" width="16" height="16"viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<pathd="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14"stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
<div className="hs-dropdown-menu ti-dropdown-menu transition-none hidden"aria-labelledby="hs-split-dropright">
<Link className="ti-dropdown-item" href="#">Action</Link>
<Link className="ti-dropdown-item" href="#">Another action</Link>
<Link className="ti-dropdown-item" href="#">Something else here</Link>
<Link href="#" aria-label="anchor"><hr className="dropdown-divider" /></Link>
<Link className="ti-dropdown-item" href="#">Separated link</Link>
</div>
</div>
<button type="button"className="hs-dropdown-toggle relative ti-btn ti-btn-secondary-full  !py-2 !rounded-s-none ti-dropdown-toggle !me-0">Split dropleft</button>
</div>`

export const dropdown11 = `<div className="hs-dropdown ti-dropdown">
<button type="button" className="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2" aria-expanded="false">
 Dropstart<i className="ri-arrow-down-s-line align-middle inline-block"></i></button>
 <ul className="hs-dropdown-menu ti-dropdown-menu hidden"> 
 <li><Link className="ti-dropdown-item" href="#">Regular link</Link></li> 
 <li><Link className="ti-dropdown-item active" href="#" aria-current="true">Active link</Link> </li>
  <li><Link className="ti-dropdown-item" href="#">Another link</Link></li>
  </ul>
  </div>`

export const dropdown12 = `  <div className="hs-dropdown ti-dropdown">
<button type="button" className="ti-btn-primary-full ti-dropdown-toggle !py-2" aria-expanded="false"> Dropstart<i className="ri-arrow-down-s-line align-middle inline-block"></i></button>
<ul className="hs-dropdown-menu ti-dropdown-menu hidden"> 
<li><Link className="ti-dropdown-item" href="#">Regular link</Link></li>
 <li><Link className="ti-dropdown-item disabled" href="#"  aria-current="true">Active  link</Link></li>
  <li><Link className="ti-dropdown-item" href="#">Another link</Link>
  </li>
  </ul>
  </div>`

export const dropdown13 = `<div className="ti-btn-list"><div className="ti-btn-group"> 
<div className="hs-dropdown ti-dropdown">
 <button className="ti-btn ti-btn-primary-full ti-dropdown-toggle" type="button" id="defaultDropdown" aria-expanded="false"> Default dropdown<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button> 
 <ul className="hs-dropdown-menu ti-dropdown-menu hidden" aria-labelledby="defaultDropdown"> 
 <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
  <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
  <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
  </ul> 
  </div>
  </div>
  <div className="ti-btn-group"> 
  <div className="hs-dropdown ti-dropdown">
   <button className="ti-btn ti-btn-secondary-full ti-dropdown-toggle" type="button" id="dropdownMenuClickableOutside" aria-expanded="false"> Clickable outside<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" aria-labelledby="defaultDropdown">
     <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
      <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
      <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
      </ul> </div>
      </div>
      <div className="ti-btn-group"> 
      <div className="hs-dropdown ti-dropdown"> 
      <button className="ti-btn ti-btn-info-full ti-dropdown-toggle" type="button" id="dropdownMenuClickableInside" aria-expanded="false"> Clickable inside<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
       <ul className="hs-dropdown-menu ti-dropdown-menu hidden" aria-labelledby="dropdownMenuClickableInside"> <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
        <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
         <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
         </ul> </div>
         </div>
         <div className="ti-btn-group"> <div className="hs-dropdown ti-dropdown">
          <button className="ti-btn ti-btn-warning-full ti-dropdown-toggle" type="button" id="dropdownMenuClickable" aria-expanded="false"> Manual close<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
           <ul className="hs-dropdown-menu ti-dropdown-menu hidden" aria-labelledby="dropdownMenuClickable">
            <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
             <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
              <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
               <ul> </div></div>
               </div>`

export const dropdown14 = ` <div className="hs-dropdown ti-dropdown">
<button className="ti-btn ti-btn-secondary-full ti-dropdown-toggle !py-2" type="button" id="dropdownMenu2" aria-expanded="false"> Dropdown<i className="ri-arrow-down-s-line align-middle inline-block"></i></button>
<div className="hs-dropdown-menu ti-dropdown-menu hidden"> <form className="!px-6 !py-4"> <div className="mb-4"> 
<label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label> 
<input type="email" className="form-control w-full !rounded-md" id="exampleDropdownFormEmail1" placeholder="email@example.com" /> </div>
 <div className="mb-4">
  <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label> 
  <input type="password" className="form-control w-full !rounded-md" id="exampleDropdownFormPassword1" placeholder="Password" /> </div> 
  <div className="mb-4">
   <div className="form-check !ps-0"> <input type="checkbox" className="form-check-input" id="dropdownCheck" />
    <label className="ps-2 form-check-label" htmlFor="dropdownCheck"> Remember me </label>
     </div> 
     </div>
      <button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button> </form> 
      <div className="dropdown-divider"></div>
       <Link className="ti-dropdown-item" href="#">New around here? Sign up</Link>
        <Link className="ti-dropdown-item" href="#">Forgot password?</Link>
        </div>
        </div>`

export const dropdown15 = ` <div className="">
<div className="ti-dropdown hs-dropdown">
 <button className="ti-btn ti-btn-primary-full ti-dropdown-toggle mb-0 !py-2" type="button" id="dropdownMenuButton" aria-expanded="false"> Dropdown<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button> 
 <ul className="hs-dropdown-menu ti-dropdown-menu hidden " aria-labelledby="dropdownMenuButton"> 
 <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
 <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
  <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
   </ul></div>
   <div className="ti-dropdown hs-dropdown">
    <button type="button" className="ti-btn ti-btn-secondary-full ti-dropdown-toggle mb-0 !py-2" aria-expanded="false"> Right-aligned menu<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
     <ul className="hs-dropdown-menu ti-dropdown-menu ti-dropdown-menu-end hidden ">
      <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
      <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
      <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
       </ul></div>
       <div className="ti-dropdown hs-dropdown" data-hs-dropdown-strategy="absolute">
        <button type="button" id="hs-dropdown-left-but-right-on-lg" className="ti-btn ti-btn-info-full ti-dropdown-toggle mb-0 !py-2" aria-expanded="false"> Left-aligned, right-aligned lg<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button> 
        <ul className="hs-dropdown-menu ti-dropdown-menu hidden lg:ti-dropdown-menu-end " aria-labelledby="hs-dropdown-left-but-right-on-lg">
         <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
         <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
          <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
           </ul></div>
           <div className="ti-dropdown hs-dropdown" data-hs-dropdown-strategy="absolute"> 
           <button type="button" id="hs-dropdown-right-but-left-on-lg" className="ti-btn ti-btn-warning-full ti-dropdown-toggle mb-0 !py-2" aria-expanded="false"> Right-aligned, left-aligned lg<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
            <ul className="hs-dropdown-menu ti-dropdown-menu hidden  ti-dropdown-menu-end lg:ti-dropdown-menu-start" aria-labelledby="hs-dropdown-right-but-left-on-lg">
             <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
              <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
               <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
               </ul></div>
               <div className="hs-dropdown ti-dropdown [--placement:left-top] m-1"> 
               <button id="hs-dropright2" type="button" className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-success-full !py-2"> <svg className="w-auto h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> </svg> Dropstart </button><ul className="hs-dropdown-menu  ti-dropdown-menu transition-none hidden" aria-labelledby="hs-dropright"> <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
                 <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
                 <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
                 </ul>
                 </div>
                 <div className="hs-dropdown ti-dropdown [--placement:right-top] m-1">
                  <button id="hs-dropright1" type="button" className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2"> Dropend <svg className="w-auto h-2.5 ti-dropdown-caret !text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> </svg> </button>
                  <ul className="hs-dropdown-menu  ti-dropdown-menu transition-none hidden" aria-labelledby="hs-dropright"> 
                  <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
                  <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> 
                  <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> </ul>
                  </div>
                  <div className="hs-dropdown ti-dropdown [--placement:top-left] m-1"> 
                  <button id="hs-dropup1" type="button" className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-success-full !py-2"> Dropup <svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> </svg> </button>
                  <ul className="hs-dropdown-menu  mt-0 transition-none ti-dropdown-menu hidden" aria-labelledby="hs-dropup">
                   <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li> <li><Link className="ti-dropdown-item" href="#">Menu item</Link> </li>
                    </ul></div>
                    </div>`


export const dropdown16 = ` <div className="ti-dropdown hs-dropdown">
<button className="ti-btn ti-btn-dark ti-dropdown-toggle !py-2" type="button"id="dropdownMenuButton34" aria-expanded="false">Dropdown button<i className="ri-arrow-down-s-line align-middle inline-block"></i></button>
<u className="hs-dropdown-menu ti-dropdown-menu !bg-black dark:!bg-defaulttextcolor/10 hidden">
<li><Link className="ti-dropdown-item !text-white dark:!text-defaulttextcolor" href="#">Action</Link></li>
<li><Link className="ti-dropdown-item !text-white dark:!text-defaulttextcolor" href="#">Another action</Link></li>
<li><Link className="ti-dropdown-item !text-white dark:!text-defaulttextcolor" href="#">Something else here</Link></li>
</u>
</div>`

export const dropdown17 = ` <div className="ti-btn-list">
<div className="ti-dropdown hs-dropdown"> <button className="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2" type="button" aria-expanded="false"> Primary<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button> 
<ul className="hs-dropdown-menu ti-dropdown-menu !bg-primary hidden"> 
<li><Link className="ti-dropdown-item !text-white" href="#">Action</Link></li>
 <li><Link className="ti-dropdown-item !text-white" href="#">Another action</Link></li>
  <li><Link className="ti-dropdown-item !text-white" href="#">Something else here</Link></li> 
  </ul>
  </div>
  <div className="ti-dropdown hs-dropdown">
   <button className="ti-btn ti-btn-secondary-full ti-dropdown-toggle !py-2" type="button" aria-expanded="false"> secondary<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
    <ul className="hs-dropdown-menu ti-dropdown-menu !bg-secondary hidden">
     <li><Link className="ti-dropdown-item !text-white" href="#">Action</Link></li> 
     <li><Link className="ti-dropdown-item !text-white" href="#">Another action</Link></li> <li><Link className="ti-dropdown-item !text-white" href="#">Something else here</Link></li>
      </ul></div>
      <div className="ti-dropdown hs-dropdown"> 
      <button className="ti-btn ti-btn-warning-full ti-dropdown-toggle !py-2" type="button" aria-expanded="false"> warning<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button> 
      <ul className="hs-dropdown-menu ti-dropdown-menu dropmenu-item-warning hidden"> <li><Link className="ti-dropdown-item active" href="#">Active</Link> </li> <li><Link className="ti-dropdown-item" href="#">Action</Link></li> 
      <li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
       <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li>
        </ul>
        </div>
        <div className="ti-dropdown hs-dropdown"> 
        <button className="ti-btn ti-btn-info-full ti-dropdown-toggle !py-2" type="button" aria-expanded="false"> info<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button> <ul className="hs-dropdown-menu ti-dropdown-menu dropmenu-item-info hidden">
         <li><Link className="ti-dropdown-item active" href="#">Active</Link> </li>
          <li><Link className="ti-dropdown-item" href="#">Action</Link></li>
           <li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
            <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li>
             </ul>
             </div>
             <div className="ti-dropdown hs-dropdown">
              <button className="ti-btn ti-btn-success ti-dropdown-toggle !py-2" type="button" aria-expanded="false"> success<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
               <ul className="hs-dropdown-menu ti-dropdown-menu dropmenu-light-success hidden">
                <li><Link className="ti-dropdown-item" href="#">Action</Link></li> 
               <li><Link className="ti-dropdown-item" href="#">Another action</Link></li> 
               <li><Link className="ti-dropdown-item active" href="#">Active</Link> </li> 
               <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li>
                </ul>
                </div>
                <div className="ti-dropdown hs-dropdown">
                 <button className="ti-btn ti-btn-danger ti-dropdown-toggle !py-2" type="button" aria-expanded="false"> danger<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
                  <ul className="hs-dropdown-menu ti-dropdown-menu dropmenu-light-danger hidden">
                   <li><Link className="ti-dropdown-item" href="#">Action</Link></li> 
                   <li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
                    <li><Link className="ti-dropdown-item active" href="#">Active</Link> </li>
                     <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li>
                      </ul>
                      </div
                      ></div>`

export const dropdown18 = ` <div className="ti-btn-list">
<div className="ti-dropdown hs-dropdown"> 
<button type="button" className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false"> Primary<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button> 
<ul className="hs-dropdown-menu ti-dropdown-menu hidden"> 
<li><Link className="ti-dropdown-item" href="#">Action</Link></li>
 <li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
  <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li> 
  <li> <hr className="dropdown-divider" /> </li> 
  <li><Link className="ti-dropdown-item" href="#">Separated link</Link></li>
   </ul>
   </div>
   <div className="ti-dropdown hs-dropdown"> 
   <button type="button" className="ti-btn ti-btn-ghost-secondary ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false"> Secondary<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button> <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
    <li><Link className="ti-dropdown-item" href="#">Action</Link></li>
     <li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
      <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li> 
      <li> <hr className="dropdown-divider" /> </li> <li><Link className="ti-dropdown-item" href="#">Separated link</Link></li>
       </ul>
       </div>
       <div className="ti-dropdown hs-dropdown">
        <button type="button" className="ti-btn ti-btn-ghost-success ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false"> Success<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
         <ul className="hs-dropdown-menu ti-dropdown-menu hidden"> 
         <li><Link className="ti-dropdown-item" href="#">Action</Link></li> 
         <li><Link className="ti-dropdown-item" href="#">Another action</Link></li> 
         <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li> 
         <li> <hr className="dropdown-divider" /> </li> 
         <li><Link className="ti-dropdown-item" href="#">Separated link</Link></li> 
         </ul>
         </div>
         <div className="ti-dropdown hs-dropdown"> 
         <button type="button" className="ti-btn ti-btn-ghost-info ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false"> Info<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
          <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
           <li><Link className="ti-dropdown-item" href="#">Action</Link></li>
            <li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
             <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li> 
             <li> <hr className="dropdown-divider" /> </li>
              <li><Link className="ti-dropdown-item" href="#">Separated link</Link></li> 
              </ul>
              </div>
              <div className="ti-dropdown hs-dropdown"> 
              <button type="button" className="ti-btn ti-btn-ghost-warning ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false"> Warning<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button>
               <ul className="hs-dropdown-menu ti-dropdown-menu hidden"> 
               <li><Link className="ti-dropdown-item" href="#">Action</Link></li> 
               <li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
                <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li> 
                <li> <hr className="dropdown-divider" /> </li>
                 <li><Link className="ti-dropdown-item" href="#">Separated link</Link></li>
                  </ul>
                  </div>
                  <div className="ti-dropdown hs-dropdown">
                   <button type="button" className="ti-btn ti-btn-ghost-danger ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false"> Danger<i className="ri-arrow-down-s-line align-middle inline-block"></i> </button> 
                   <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                    <li><Link className="ti-dropdown-item" href="#">Action</Link></li> 
                    <li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
                     <li><Link className="ti-dropdown-item" href="#">Something else here</Link></li>
                      <li> <hr className="dropdown-divider" /> </li>
                       <li><Link className="ti-dropdown-item" href="#">Separated link</Link></li>
                        </ul>
                        </div>
                        </div>`

export const dropdown19 = ` <p className=" mb-3">Use <code>.ti-dropdown-item-text.</code> to create non-interactive dropdown items.</p>
<div className="bd-example">
<ul className="dropdown-menu border dark:border-defaultborder/10 shadow-sm"> 
<li><span className="!py-2 !px-4 !text-[0.875rem]">Dropdown item text</span> </li> 
<li><Link className="ti-dropdown-item" href="#">Action</Link></li> 
<li><Link className="ti-dropdown-item" href="#">Another action</Link> </li> 
<li><Link className="ti-dropdown-item" href="#">Something else here</Link> 
</li>
</ul>
</div>`

export const dropdown20 = ` <p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
<div className="bd-example">
<ul className="dropdown-menu border dark:border-defaultborder/10 shadow-sm">
<li><h6 className="dropdown-header">Dropdown header</h6></li>
<li><Link className="ti-dropdown-item" href="#">Action</Link></li>
<li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
<li><Link className="ti-dropdown-item" href="#">Something else here</Link></li>
</ul>
</div>`

export const dropdown21 = ` <div className="bd-example">
<ul className="dropdown-menu border dark:border-defaultborder/10 shadow-sm">
<li><Link className="dropdown-header" href="#">Heading</Link></li>
<li><Link className="ti-dropdown-item" href="#">Action</Link></li>
<li><Link className="ti-dropdown-item" href="#">Another action</Link></li>
<li><Link className="ti-dropdown-item" href="#">Something elsehere</Link></li>
<li><hr className="dropdown-divider" /></li>
<li><Link className="ti-dropdown-item" href="#">Separated link</Link></li>
</ul>
</div>`

export const dropdown22 = `<div className="bd-example">
<div className="dropdown-menu border dark:border-defaultborder/10 
shadow-sm p-6 text-[#8c9097] dark:text-white/50 text-[0.875rem] max-w-[200px]">
<p>  Some example text thats free-flowing within the dropdown menu.</p>
<p className="mb-0"> And this is more example text.</p>
</div>
</div>`

//Object Fit

export const object1 = `<div className="box-body ">
<img src="../../../assets/images/media/media-28.jpg"
 className="object-contain border dark:border-defaultborder/10 !rounded-md" alt="..." />
</div>`

export const object2 = `<div className="box-body ">
<img src="../../../assets/images/media/media-28.jpg"
 className="object-cover border dark:border-defaultborder/10 !rounded-md" alt="..." />
</div>`

export const object3 = `<div className="box-body ">
<img src="../../../assets/images/media/media-28.jpg"
 className="object-fill border dark:border-defaultborder/10 !rounded-md" alt="..." />
</div>`

export const object4 = `<div className="box-body ">
<img src="../../../assets/images/media/media-28.jpg" 
className="object-scale-down border dark:border-defaultborder/10 !rounded-md" alt="..." />
</div>`

export const object5 = `<div className="box-body ">
<img src="../../../assets/images/media/media-28.jpg" 
className="object-none border dark:border-defaultborder/10 !rounded-md" alt="..." />
</div>`

export const object6 = `<div className="box-body ">
<img src="../../../assets/images/media/media-28.jpg" 
className="sm:object-contain border dark:border-defaultborder/10 !rounded-md" alt="..." />
</div>`

export const object7 = `<div className="box-body ">
<img src="../../../assets/images/media/media-28.jpg"
 className="md:object-contain border dark:border-defaultborder/10 !rounded-md" alt="..." />
</div>`

export const object8 = `<div className="box-body ">
<img src="../../../assets/images/media/media-28.jpg" 
className="lg:object-contain border dark:border-defaultborder/10 !rounded-md" alt="..." />
</div>`

export const object9 = `<div className="box-body ">
<img src="../../../assets/images/media/media-28.jpg"
 className="xl:object-contain border dark:border-defaultborder/10 !rounded-md" alt="..." />
</div>`

export const object10 = `<div className="box-body ">
<img src="../../../assets/images/media/media-28.jpg" 
className="xxl:object-contain border dark:border-defaultborder/10 !rounded-md" alt="..." />
</div>`

export const object11 = `<div className="box-body object-fit-container">
<video src="../../../assets/video/1.mp4" className="object-contain 
!rounded-md border dark:border-defaultborder/10" autoPlay loop muted>
</video>
</div>`

export const object12 = `<div className="box-body object-fit-container">
<video src="../../../assets/video/1.mp4" className="object-cover
 !rounded-md border dark:border-defaultborder/10" autoPlay loop muted>
</video>
</div>`

export const object13 = `<div className="box-body object-fit-container">
<video src="../../../assets/video/1.mp4" className="object-fill !rounded-md 
border dark:border-defaultborder/10" autoPlay loop muted></video></div>`

export const object14 = `<div className="box-body object-fit-container">
<video src="../../../assets/video/1.mp4" className="object-scale-down 
!rounded-md border dark:border-defaultborder/10" autoPlay loop muted>
</video>
</div>`

export const object15 = `<div className="box-body object-fit-container">
<video src="../../../assets/video/1.mp4" className="object-none 
!rounded-md border dark:border-defaultborder/10" autoPlay loop muted>
</video>
</div>`

//Popovers

export const popover1 = `<div className="ti-btn-list space-x-2 
rtl:space-x-reverse">
<div className="hs-tooltip ti-main-tooltip 
[--trigger:click]"> 
<Link className="hs-tooltip-toggle 
ti-main-tooltip-toggle ti-btn ti-btn-outline-primary me-2" 
href="#">Popover Top 
<div className="hs-tooltip-content ti-main-tooltip-content 
dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip"> 
<div  className="!border-b !border-solid dark:border-defaultborder/10
!rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder 
text-start w-full text-[1rem]">
<h6>Popover Top</h6> 
</div> 
<p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">
And heres some amazing content. Its very engaging. Right?</p>
 </div>  
 </Link>
 </div>
 <div className="hs-tooltip ti-main-tooltip [--trigger:click] 
 [--placement:right]"> 
 <Link className="hs-tooltip-toggle ti-main-tooltip-toggle 
 ti-btn ti-btn-outline-primary me-2" href="#">Popover Right 
 <div className="hs-tooltip-content ti-main-tooltip-content 
 dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip"> 
 <div  className="!border-b !border-solid dark:border-defaultborder/10
  !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder
   text-start w-full text-[1rem]"> <h6>Popover Right</h6> 
</div> 
<p className="!text-defaulttextcolor !text-[0.8rem] !py-4 
!px-4 text-start">And heres some amazing content. Its very 
engaging. Right?</p> 
</div> 
</Link>
</div>
<div className="hs-tooltip ti-main-tooltip [--trigger:click] 
[--placement:bottom]"> 
<Link className="hs-tooltip-toggle ti-main-tooltip-toggle 
ti-btn ti-btn-outline-primary me-2" href="#">Popover Bottom 
<div className="hs-tooltip-content ti-main-tooltip-content 
dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip"> 
<div  className="!border-b !border-solid dark:border-defaultborder/10 
!rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder 
text-start w-full text-[1rem]"> 
<h6>Popover Bottom</h6> 
</div> <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 
text-start">And heres some amazing content. Its very engaging. Right?</p> 
</div>  
 </Link>
 <div>
 <div className="hs-tooltip ti-main-tooltip [--trigger:click]
 [--placement:left]"> <Link className="hs-tooltip-toggle 
 ti-main-tooltip-toggle ti-btn ti-btn-outline-primary me-2" 
 href="#">Popover Left 
 <div className="hs-tooltip-content ti-main-tooltip-content 
 dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip"> 
 <div  className="!border-b !border-solid dark:border-defaultborder/10
  !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder
   text-start w-full text-[1rem]"> <h6>Popover Left</h6> 
</div> 
<p className="!text-defaulttextcolor !text-[0.8rem] !py-4 
!px-4 text-start">And heres some amazing content. Its very 
engaging. Right?</p> 
</div>   
</Link>
</div>
</div>`

export const popover2 = `<div className="ti-btn-list space-x-2
 rtl:space-x-reverse"></div><div className="hs-tooltip ti-main-tooltip 
 [--trigger:click] [--placement:top]">
 <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn 
 ti-btn-outline-primary me-2" href="#">Header Primary <div className="hs-tooltip-content
  ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
  <div  className="!border-b !border-solid dark:border-defaultborder/10 bg-primary
 !rounded-t-md !py-2  !px-4 text-white border-defaultborder text-start w-full 
 text-[1rem]">
 <h6>Color Header</h6>
 </div>
 <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">
 Popover With Primary Header</p> </div>   
 </Link></div><div className="hs-tooltip ti-main-tooltip [--trigger:click]
  [--placement:right]"> <Link className="hs-tooltip-toggle 
  ti-main-tooltip-toggle ti-btn ti-btn-outline-secondary me-2"
   href="#">Header Secondary 
<div className="hs-tooltip-content ti-main-tooltip-content
 dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
 <div  className="!border-b !border-solid 
 dark:border-defaultborder/10 bg-secondary !py-2 !rounded-t-md
  !px-4 text-white border-defaultborder text-start w-full text-[1rem]">
   <h6>Color Header</h6> 
   </div> 
   <p className="!text-defaulttextcolor !text-[0.8rem]
    !py-4 !px-4 text-start">Popover With Secondary Header</p></div>
</Link>
</div>
<div className="hs-tooltip ti-main-tooltip [--trigger:click]
 [--placement:bottom]"> <Link className="hs-tooltip-toggle 
 ti-main-tooltip-toggle ti-btn ti-btn-outline-info me-2" href="#">
 Header Info 
 <div className="hs-tooltip-content ti-main-tooltip-content 
 dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip"> 
 <div  className="!border-b !border-solid dark:border-defaultborder/10 
 bg-info !py-2 !px-4 !rounded-t-md text-white border-defaultborder
  text-start w-full text-[1rem]"> <h6>Color Header</h6> 
</div> 
<p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">
Popover With Info Header</p> </div>
</Link>
</div>
<div className="hs-tooltip ti-main-tooltip 
[--trigger:click] [--placement:left]">
<Link className="hs-tooltip-toggle ti-main-tooltip-toggle
 ti-btn ti-btn-outline-warning me-2" href="#">Header warning
 <div className="hs-tooltip-content ti-main-tooltip-content 
 dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
 <div className="!border-b !border-solid dark:border-defaultborder/10
bg-warning !py-2 !px-4 !rounded-t-md text-white border-defaultborder
text-start w-full text-[1rem]"> <h6>Color Header</h6>
</div> 
<p className="!text-defaulttextcolor !text-[0.8rem] !py-4 
!px-4 text-start">Popover With warning Header</p> 
</div>   
</Link>
</div>
<div className="hs-tooltip ti-main-tooltip 
[--trigger:click] [--placement:top]">
<Link className="hs-tooltip-toggle ti-main-tooltip-toggle 
ti-btn ti-btn-outline-success me-2" href="#">Header succuss 
<div className="hs-tooltip-content ti-main-tooltip-content 
dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip"> 
<div  className="!border-b !border-solid 
dark:border-defaultborder/10 bg-success 
!py-2 !px-4 text-white !rounded-t-md
border-defaultborder text-start w-full text-[1rem]">
 <h6>Color Header</h6> 
 </div> 
 <p className="!text-defaulttextcolor 
 !text-[0.8rem] !py-4 !px-4 text-start">
 Popover With succuss Header</p> </div>   
 </Link></div><div className="hs-tooltip 
 ti-main-tooltip [--trigger:click] [--placement:top]">
  <Link className="hs-tooltip-toggle ti-main-tooltip-toggle
   ti-btn ti-btn-outline-danger me-2" href="#">Header danger 
<div className="hs-tooltip-content ti-main-tooltip-content 
dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
 <div  className="!border-b !border-solid 
 dark:border-defaultborder/10 bg-danger !py-2 !px-4 
 text-white border-defaultborder !rounded-t-md 
 text-start w-full text-[1rem]"> 
 <h6>Color Header</h6>
  </div> 
  <p className="!text-defaulttextcolor !text-[0.8rem]
!py-4 !px-4 text-start">Popover With danger Header</p> 
   </div> 
 </Link>
 </div>
 </div>`

export const popover3 = `<div className="ti-btn-list space-x-2 
rtl:space-x-reverse">
<div className="hs-tooltip ti-main-tooltip 
 [--trigger:click] [--placement:top]"> 
 <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn 
 ti-btn-primary-full me-2" href="#">Primary <div className="hs-tooltip-content
  ti-main-tooltip-content !bg-primary !z-[1000] !p-0 !max-w-[276px] !border-white/10"
   role="tooltip"> <div  className="!border-b !border-solid dark:border-white/10 !py-2
    !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]"> 
    <h6>Primary Color background</h6> </div> <p className="!text-white !text-[0.8rem]
     !py-4 !px-4 text-start">Popover With primary background</p> </div>   </Link>
</div>
<div className="hs-tooltip ti-main-tooltip [--trigger:click]
 [--placement:right]"> <Link className="hs-tooltip-toggle ti-main-tooltip-toggle 
ti-btn ti-btn-secondary-full me-2" href="#">Secondary 
<div className="hs-tooltip-content ti-main-tooltip-content !bg-secondary 
!p-0 !max-w-[276px] !border-white/10" role="tooltip"> 
<div  className="!border-b !border-solid dark:border-white/10 !py-2 
!px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
<h6>Secondary Color background</h6> </div>
<p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">
Popover With secondary background</p> </div>
</Link>
</div>
<div className="hs-tooltip ti-main-tooltip [--trigger:click]
 [--placement:top]"> <Link className="hs-tooltip-toggle ti-main-tooltip-toggle
ti-btn ti-btn-info-full me-2" href="#">Info <div className="hs-tooltip-content
ti-main-tooltip-content !bg-secondary  !p-0 !max-w-[276px]  !border-white/10"
 role="tooltip"> <div  className="!border-b dark:border-white/10 !border-solid 
 !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
  <h6>Info Color background</h6> </div> <p className="!text-white !text-[0.8rem] 
  !py-4 !px-4 text-start">Popover With info background</p> </div>
  </Link>
  </div>
  <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
   <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn
    ti-btn-warning-full me-2" href="#">Warning <div className="hs-tooltip-content
     ti-main-tooltip-content !bg-warning  !p-0 !max-w-[276px] !border-white/10" 
     role="tooltip"> <div  className="!border-b dark:border-white/10 !border-solid 
     !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
      <h6>Warning Color background</h6> </div> <p className="!text-white !text-[0.8rem] 
      !py-4 !px-4 text-start">Popover With warning background</p> </div>   
      </Link>
      </div>
      <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
<Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-success-full
 me-2" href="#">Success 
 <div className="hs-tooltip-content ti-main-tooltip-content !bg-success  
 !p-0 !max-w-[276px] !border-white/10" role="tooltip"> 
 <div  className="!border-b dark:border-white/10 !border-solid 
!py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]"> 
<h6>Success Color background</h6> </div> <p className="!text-white !text-[0.8rem] 
!py-4 !px-4 text-start">Popover With success background</p> </div>
</Link>
</div>
<div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]"> 
<Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-danger-full 
me-2" href="#">Danger <div className="hs-tooltip-content ti-main-tooltip-content 
!bg-danger  !p-0 !max-w-[276px] !border-white/10" role="tooltip">
<div  className="!border-b dark:border-white/10 !border-solid !py-2 !px-4 text-white
 border-white/10 !rounded-t-md text-start w-full text-[1rem]">
 <h6>Danger Color background</h6> 
 </div> 
 <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover 
 With danger background</p> </div> </Link>
 </div>
 </div>`

export const popover4 = `<div className="ti-btn-list space-x-2 
rtl:space-x-reverse">
<div className="hs-tooltip ti-main-tooltip 
[--trigger:click] [--placement:top] ">
<Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn 
ti-btn-primary me-2" href="#">Primary <div className="hs-tooltip-content 
ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] 
overflow-hidden" role="tooltip"> <div className="!bg-primary/10"> 
<div  className="!border-b !border-solid !py-2 !px-4  text-primary
 !border-primary/20 !rounded-t-md text-start w-full text-[1rem]"> 
 <h6>Color background</h6> </div> <p className="!text-primary 
 !text-[0.8rem] !py-4 !px-4 text-start">Popover With primary 
 background</p>
 </div> 
 </div>
 </Link>
 </div>
 <div className="hs-tooltip 
 ti-main-tooltip [--trigger:click] [--placement:right]"> 
 <Link className="hs-tooltip-toggle ti-main-tooltip-toggle
  ti-btn ti-btn-secondary me-2" href="#">Secondary 
  <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] 
!p-0 !max-w-[276px] overflow-hidden" role="tooltip">
 <div className="!bg-secondary/10">
 <div  className="!border-b !border-solid !py-2 !px-4 
  text-secondary !border-secondary/20 !rounded-t-md text-start w-full text-[1rem]">
  <h6>Color background</h6> </div> 
<p className="!text-secondary !text-[0.8rem] !py-4 !px-4 text-start">Popover With 
secondary background</p>
</div> 
</div>   
</Link>
</div>
<div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
<Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-info me-2"
href="#">Info <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg
!z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip"> <div className="!bg-info/10">
<div  className="!border-b !border-solid !py-2 !px-4  text-info !border-info/20 !rounded-t-md
 text-start w-full text-[1rem]"> <h6>Color background</h6> </div> <p className="!text-info 
 !text-[0.8rem] !py-4 !px-4 text-start">Popover With info background</p>
 </div>
 </div>
 </Link></div><div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
  <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-warning me-2" href="#">
  Warning <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] 
  !p-0 !max-w-[276px] overflow-hidden" role="tooltip"> <div className="!bg-warning/10"> <div  
  className="!border-b !border-solid !py-2 !px-4  text-warning !border-warning/20 !rounded-t-md
   text-start w-full text-[1rem]"> <h6>Color background</h6> </div> <p className="!text-warning
    !text-[0.8rem] !py-4 !px-4 text-start">Popover With warning background</p> 
</div>
</div>   
</Link></div><div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
 <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-success me-2" href="#">
 Success
 <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 
 !max-w-[276px] overflow-hidden" role="tooltip">
 <div className="!bg-success/10"> 
 <div  className="!border-b !border-solid !py-2 !px-4  text-success !border-success/20 
!rounded-t-md text-start w-full text-[1rem]"> <h6>Color background</h6></div> 
<p className="!text-success !text-[0.8rem] !py-4 !px-4 text-start">Popover With success
background</p></div></div></Link>
</div>
<div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
<Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-danger me-2" 
href="#">danger
<div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] 
!p-0 !max-w-[276px] overflow-hidden" role="tooltip"> <div className="!bg-danger/10">
<div  className="!border-b !border-solid !py-2 !px-4  text-danger !border-danger/20
!rounded-t-md text-start w-full text-[1rem]"> <h6>Color background</h6> </div>
<p className="!text-danger !text-[0.8rem] !py-4 !px-4 text-start">
Popover With danger background</p></div> 
</div>   
</Link>
</div>
</div>`

export const popover5 = `<div className="hs-tooltip ti-main-tooltip
 [--trigger:click] [--placement:top]">
 <Link className="hs-tooltip-toggle
  ti-main-tooltip-toggle ti-btn ti-btn-primary-full opacity-60" href="#"> 
  Disabled button<div className="hs-tooltip-content 
  ti-main-tooltip-content dark:bg-bodybg " role="tooltip"> 
  Diabled Popover</div>
  </Link>
  </div>`

export const popover6 = `<div className="box-body flex">
<div className="hs-tooltip ti-main-tooltip me-6 !max-w-[276px] 
[--trigger:click] [--placement:top]">  
<Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#">
<svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" height="24px" 
viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/>
<path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 
2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 
2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg> 
<div className="hs-tooltip-content ti-main-tooltip-content !py-4 !px-4 !bg-primary !text-white"
 role="tooltip">
 <p>The Icon Popover</p> 
 </div>  
 </Link>
 </div>
 <div className="hs-tooltip ti-main-tooltip !max-w-[276px] [--trigger:click] 
 [--placement:left]"><Link className="hs-tooltip-toggle ti-main-tooltip-toggle" 
 href="#">  <svg xmlns="http://www.w3.org/2000/svg" className="fill-secondary" 
 height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
 <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 
 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 
 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
 <div className="hs-tooltip-content ti-main-tooltip-content !bg-secondary !text-white 
 !py-4 !px-4" role="tooltip">
 <p>The Icon Popover</p>
 </div>
 </Link>
 </div>
 </div>`

