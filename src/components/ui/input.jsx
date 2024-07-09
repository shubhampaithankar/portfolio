import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                'border- flex h-[48px] rounded-md border-white/10 bg-primary px-4 py-5 text-base font-light outline-none placeholder:text-white/60 focus:border-accent',
                className,
            )}
            ref={ref}
            {...props}
        />
    )
})
Input.displayName = 'Input'

export { Input }
