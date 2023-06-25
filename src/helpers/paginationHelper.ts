type IOptions = {
    page?: number,
    limit?: number
}

type IOptionResult = {
    page: number,
    limit: number,
    skip: number
}


const calculatePagination = (options : IOptions) : IOptionResult => {
      const page = options.page || 1;
      const limit = options.limit || 10;
      const skip = (page-1) * limit;

      return {
        page, 
        limit,
        skip
      }
}

export const PaginationHelper = {
    calculatePagination
}