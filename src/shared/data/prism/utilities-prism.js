export const border1 = `<div className="box-body">
<span className="border dark:border-defaultborder/10 border-container"></span>
<span className="border-t dark:border-defaultborder/10 border-container"></span>
<span className="border-e dark:border-defaultborder/10 border-container"></span>
<span className="border-b dark:border-defaultborder/10 border-container"></span>
<span className="border-s dark:border-defaultborder/10 border-container"></span>
</div>`

export const border2 = `<div className="box-body">
<span className="border-0 border-container"></span>
<span className="border dark:border-defaultborder/10 border-t-0 border-container"></span>
<span className="border dark:border-defaultborder/10 border-e-0 border-container"></span>
<span className="border dark:border-defaultborder/10 border-b-0 border-container"></span>
<span className="border dark:border-defaultborder/10 border-s-0 border-container"></span>
</div>`

export const border3 = `<div className="box-body">
<span className="border-1 dark:border-defaultborder/10 border-container"></span>
<span className="border-container dark:border-defaultborder/10 border-2"></span>
<span className="border-container dark:border-defaultborder/10 border-4"></span>
<span className="border-container dark:border-defaultborder/10 border-8"></span>
</div>`

export const border4 = `<div className="box-body">
<span className="border border-container !border-primary"></span>
<span className="border border-container !border-secondary"></span>
<span className="border border-container !border-success"></span>
<span className="border border-container !border-danger"></span>
<span className="border border-container !border-warning"></span>
<span className="border border-container !border-info"></span>
<span className="border border-container !border-light"></span>
<span className="border border-container !border-black"></span>
<span className="border border-container !border-white"></span>
</div>`

export const border5 = `<div className="box-body">
<div className="mb-4">
<label htmlFor="exampleFormControlInput1"className="form-label">
Email address</label>
<input type="email" className="form-control w-full !rounded-md
 !border-success" id="exampleFormControlInput1" placeholder="name@example.com" />
 </div><div className="h4 pb-4 mb-4 text-danger border-b !border-danger">
  Below Shows Danger Border
  </div>
  <div className="p-4 bg-info/10 border !border-info 
   !border-s-0 rounded-e-md mb-1"> Customizing borders with backgrounud colors</div>
   </div>`

export const border6 = `<div className="box-body">
<div className="border border-black dark:border-white p-2 mb-2">
This is default success border
</div>
<div className="border border-black/75 dark:border-white/75 p-2 mb-2">
This is 75%opacity success border</div>
<div className="border border-black/50 dark:border-white/50 p-2 mb-2">
This is 50% opacity success border</div>
<div className="border border-black/25 dark:border-white/25 p-2 mb-2">
This is 25% opacity success border</div>
<div className="border border-black/10 dark:border-white/10 p-2">
This is 10% opacity success border</div>
</div>`

export const border7 = `<div className="box-body flex flex-wrap gap-2">
<img src="../../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-md" alt="..." />
<img src="../../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-t-md" alt="..." />
<img src="../../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-e-md" alt="..." />
<img src="../../../assets/images/media/media-58.jpg"
className="bd-placeholder-img rounded-b-md" alt="..." />
<img src="../../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-s-md" alt="..." />
<img src="../../../assets/images/media/media-58.jpg"
className="bd-placeholder-img rounded-full" alt="..." />
<img src="../../../assets/images/media/media-58.jpg"
className="bd-placeholder-img  rounded-full" alt="..." />
</div>`

export const border8 = `<div className="box-body flex flex-wrap gap-2">
<img src="../../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-none" alt="..." />
<img src="../../../assets/images/media/media-58.jpg"
 className="bd-placeholder-img rounded-sm" alt="..." />
 <img src="../../../assets/images/media/media-58.jpg"
  className="bd-placeholder-img rounded-md" alt="..." />
<img src="../../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-lg" alt="..." />
<img src="../../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-xl" alt="..." />
</div>`

//Avatars

export const avatar1 = `<div className="box-body py-4">
<span className="avatar me-2 avatar-radius-0">
<img src="../../../assets/images/faces/1.jpg" alt="img"/>
</span>
<span className="avatar me-2">
<img src="../../../assets/images/faces/2.jpg" alt="img" />
</span>
<span className="avatar me-2 avatar-rounded">
<img src="../../../assets/images/faces/3.jpg" alt="img" />
</span>
</div>`

export const avatar2 = `<div className="box-body">
{Avatarsize.map((idx)=>
    (<span className={&#96;avatar avatar-&#36;{idx.class} me-2&#96;} 
        key={Math.random()}><img src={idx.src} /></span>))}
        </div>`

export const avatar3 = `<div className="box-body">
{AvatarIcon.map((idx) => 
    (<span className={&#96;avatar avatar-&#36;{idx.class}
me-2 avatar-rounded&#96;} key={Math.random()}> 
<img src={idx.src} alt="img" />
<Link aria-label="anchor" href="#" 
className={&#96;badge bg-&#36;{idx.color} 
rounded-full avatar-badge&#96;}>
<i className={&#96;fe &#36;{idx.icon} 
text-[.5rem]&#96;}></i>
</Link></span>))}
</div>`

export const avatar4 = `<div className="box-body">
{AvatarOnline.map((idx) =>
     (<span className={&#96;avatar avatar-&#36;{idx.class}
me-2 online avatar-rounded&#96;} key={Math.random()}>
<img src={idx.src} alt="img" /></span>))}</div>`

export const avatar5 = `<div className="box-body">
{AvatarOffline.map((idx) => 
    (<span className={&#96;avatar avatar-&#36;{idx.class} 
        me-2 offline avatar-rounded&#96;} key={Math.random()}>
        <img src={idx.src} alt="img" /></span>))}
        </div>`

export const avatar6 = `<div className="box-body">
{AvatarNumber.map((idx) => (<span className={&#96;avatar avatar-&#36;{idx.class}
     me-2 avatar-rounded&#96;} key={Math.random()}>
     <img src={idx.src} alt="img" />
     <span className={&#96;badge rounded-full bg-&#36;{idx.color} 
     avatar-badge&#96;}>{idx.number}</span></span>))}
     </div>`

export const avatar7 = `<div className="box-body">
{AvatarInitial.map((idx)=>(<span className={&#96;avatar
     avatar-&#36;{idx.class} m-2 bg-&#36;{idx.color}&#96;} 
     key={Math.random()}> {idx.class}<span>))}
     </div>`

export const avatar8 = `<div className="box-body">
<div className="avatar-list-stacked">{StackedAvatars.map((idx)=>
    (<span className="avatar" key={Math.random()}> 
    <img src={idx.src} alt="img" /> </span> ))}
    <Link className="avatar bg-primary text-white" href="#">
     +8</Link></div>
     </div>`

export const avatar9 = `<div className="box-body">
<div className="avatar-list-stacked">
{StackedAvatars.map((idx)=>(<span className="avatar avatar-rounded"
 key={Math.random()}> <img src={idx.src} alt="img" />
 </span>))}
 <Link className="avatar bg-primary avatar-rounded
  text-white" href="#"> +8</Link>
  </div>
  </div>`