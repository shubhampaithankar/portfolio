import * as React from 'react'

import { cn } from '@/lib/utils'

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                'rounded-md-border focus-visible:-ring-offset-8 flex min-h-[80px] w-full border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            ref={ref}
            {...props}
        />
    )
})
Textarea.displayName = 'Textarea'

export { Textarea }
