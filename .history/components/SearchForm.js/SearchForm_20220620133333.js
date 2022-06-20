import React from 'react'

function SearchForm() {
    return (
        <div>
            <div className='bg-[#323259] w-full px-[20px] pt-[20px]'>
                <div className='grid grid-cols-12 gap-3 h-[62px] text-white '>
                    <div className=' col-span-5'>
                        <input onChange={keywordFilterHandle} className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547]' placeholder='Search keywords' type='text' />
                    </div>
                    <div className='col-span-3'>
                        <select onChange={categoryFilterHandle} defaultValue='anycategory' className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                            <option value='anycategory'>Any category</option>
                            {categories.map((category, index) => (<option value={category.name} key={category.id}>{category.name}</option>))}
                            {/* <option value="volvo">Volvo</option> */}
                        </select>
                    </div>
                    <div className='col-span-3'>
                        <select onChange={stockFilterHandle} defaultValue='anystock' className=' w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                            <option value="anystock">Any stock status</option>
                            <option value="instock">In stock</option>
                            <option value="lowstock">Low Stock</option>
                            <option value="sold">SOLD</option>
                        </select>
                    </div>
                    <div onClick={searchForm} className='col-span-1 h-[38px] rounded-md px-[12px] py-[6px] bg-[#b18aff] cursor-pointer'>
                        <button className='text-black hover:opacity-80' >Search</button>
                    </div>
                </div>
                <div className={`flex relative transition-maxHeight duration-700 ease-in-out overflow-hidden`} ref={contentSpace} style={{ maxHeight: `${height}` }}>
                    <div className=' absolute top-[-20px] h-[1px] bg-[#1b1b38] w-[1191px] left-[-20px] '></div>
                    <div className='flex  mr-[40px]'>
                        <div className='mr-[15px]'>Search in:</div>
                        <div className='ml-[10px]'>
                            <ul>
                                <li>
                                    <input type='checkbox' id='name' />
                                    <label htmlFor='name'>Name</label>
                                </li>
                                <li>
                                    <input type='checkbox' id='sku' />
                                    <label htmlFor='sku'>SKU</label>
                                </li>
                                <li className='mb-[8px]'>
                                    <input type='checkbox' id='fulldescription' />
                                    <label htmlFor='fulldescription'>Full Description</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex mt-[20px] mr-[40px]'>
                        <div className='mr-[15px]'>Availability</div>
                        <div>
                            <select className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                                <option value="">Any Availability Status</option>
                                <option value="">Only Enabled</option>
                                <option value="">Only Disabled</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex mt-[20px]'>
                        <div className='mr-[15px]'>Vendor</div>
                        <div>
                            <input className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm' type='text' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div onClick={expandAndCollapse} className=' w-[50px] bg-[#323259] text-center cursor-pointer'>
                    <KeyboardArrowDown className={`h-fullr transition-transform ${rotate}`} />
                </div>
            </div>
        </div>
    )
}

export default SearchForm